import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { RichText as RichTextDOM } from 'prismic-dom';
import { RichText } from 'prismic-reactjs';

import { prismicClient } from '@services/prismic';
import { formatDateToLocaleDateString } from '@commons/utils';
import { PostDetailsProps } from '@modules/Posts/types';
import { Container } from '@modules/Posts/styles/detailsPageStyles';
import { BaseLayout } from '@commons/components/layouts';
import { PostWrapper } from '@modules/Posts/components/elements/PostWrapper';

interface PostDetailsPageProps {
  post: PostDetailsProps;
}

export const PostDetailsPage: React.FC<PostDetailsPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      <BaseLayout>
        <Container>
          <PostWrapper>
            <h1>{post.title}</h1>
            <time>{post.updatedAt}</time>
            <div className="content">
              <RichText render={post.content} />
            </div>
          </PostWrapper>
        </Container>
      </BaseLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const { slug } = params as { slug: string };

  const response = await prismicClient.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichTextDOM.asText(response.data.title),
    content: response.data.content,
    updatedAt: formatDateToLocaleDateString(
      response.last_publication_date as string
    ),
  };

  return {
    props: {
      post,
    },
  };
};

export default PostDetailsPage;
