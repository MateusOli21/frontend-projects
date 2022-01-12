import Head from 'next/head';
import { GetStaticProps } from 'next';

import womanImage from '@modules/Home/assets/images/avatar.svg';

import { stripeApi } from '@services/stripeApi';
import { BaseLayout } from '@commons/components/layouts';
import { Container, Section } from '@modules/Home/assets/styles/homeStyles';
import { SubscribeButton } from '@commons/components/modules/SubscribeButton';

interface HomeProps {
  product: { priceId: string; amount: number };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <BaseLayout>
        <Container>
          <div className="content">
            <Section>
              <span>👏 Olá, bem-vindo!</span>
              <h1>
                Notícias sobre o mundo <span>React</span>
              </h1>
              <p>
                Tenha acesso a diversas publicações <br />
                <span>por {product?.amount} ao mês</span>
              </p>

              <SubscribeButton />
            </Section>

            <img src={womanImage} alt="woman studing" />
          </div>
        </Container>
      </BaseLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripeApi.prices.retrieve(
    'price_1K4c4yCZ4vi2XMMgSeREBOI5'
  );

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount as number) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};
