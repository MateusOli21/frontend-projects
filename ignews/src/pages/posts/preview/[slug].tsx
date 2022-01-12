import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from 'next';
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

export const PostDetailsPreviewPage: React.FC<PostDetailsPageProps> = ({
  post,
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
      return;
    }
  }, [session]);

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const response = await prismicClient.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichTextDOM.asText(response.data.title),
    content: response.data.content.splice(0, 2),
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

export default PostDetailsPreviewPage;
