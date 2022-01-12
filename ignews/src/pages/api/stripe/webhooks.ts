import { stripeApi } from '@services/stripeApi';
import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import Stripe from 'stripe';

import { saveSubscription } from '../_lib/manageSubscription';

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
]);

// desabilitando o bodyParser para consumir a req como uma Stream
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
    return;
  }

  const buf = await buffer(req);
  const secret = req.headers['stripe-signature'];

  let event: Stripe.Event;

  try {
    event = stripeApi.webhooks.constructEvent(
      buf,
      secret as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  const { type } = event;

  if (!relevantEvents.has(type)) {
    return res.json({ message: 'received' });
  }

  try {
    switch (type) {
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        const subscription = event.data.object as Stripe.Subscription;

        await saveSubscription(
          subscription.id,
          subscription.customer.toString(),
          false
        );

      case 'checkout.session.completed':
        const checkoutSession = event.data.object as Stripe.Checkout.Session;

        await saveSubscription(
          checkoutSession.subscription?.toString() as string,
          checkoutSession.customer?.toString() as string,
          true
        );

      default:
        throw new Error('unhandled event');
    }
  } catch (err) {
    return res.json({ message: 'Webhook event handler failed' });
  }

  return res.status(200).json({ message: 'ok' });
};
