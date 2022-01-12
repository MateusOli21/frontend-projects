import React from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { igNewsApi } from '@services/igNewsApi';
import { getStripeJs } from '@services/stripeJs';
import { PrimaryButton } from '@commons/components/elements/buttons';

export const SubscribeButton: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (status !== 'authenticated') {
      signIn('github');
      return;
    }

    if (session?.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await igNewsApi.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <PrimaryButton onClick={handleSubscribe}>Inscreva-se agora</PrimaryButton>
  );
};
