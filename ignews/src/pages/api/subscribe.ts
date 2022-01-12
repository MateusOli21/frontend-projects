import { fauna } from '@services/fauna';
import { stripeApi } from '@services/stripeApi';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { query as q } from 'faunadb';

type UserProps = {
  ref: { id: string };
  data: { stripe_customer_id: string };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
    return;
  }

  try {
    const session = await getSession({ req });

    const user = await fauna.query<UserProps>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session?.user?.email as string)
        )
      )
    );

    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await stripeApi.customers.create({
        email: session?.user?.email as string,
      });

      await fauna.query(
        q.Update(q.Ref(q.Collection('users'), user.ref.id), {
          data: {
            stripe_customer_id: stripeCustomer.id,
          },
        })
      );

      customerId = stripeCustomer.id;
    }

    const stripeCheckoutSession = await stripeApi.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{ price: process.env.STRIPE_PRODUCT_ID, quantity: 1 }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL as string,
      cancel_url: process.env.STRIPE_CANCEL_URL as string,
    });

    return res.status(200).json({
      sessionId: stripeCheckoutSession.id,
    });
  } catch (err) {
    console.log('🚀 ~ file: subscribe.ts ~ line 58 ~ err', err);
  }
};
