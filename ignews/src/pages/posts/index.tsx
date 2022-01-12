import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';

import { prismicClient, Prismic } from '@services/prismic';
import { formatDateToLocaleDateString } from '@commons/utils';
import { BaseLayout } from '@commons/components/layouts';
import { Container } from '@modules/Posts/styles/mainPageStyles';
import { PostPreviewCard } from '@modules/Posts/components/elements';
import { PostPreviewProps } from '@modules/Posts/types';

interface PostsProps {
  posts: PostPreviewProps[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <BaseLayout>
        <Container>
          <div className="posts-list">
            {posts?.map(post => (
              <PostPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </BaseLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.query(
    Prismic.predicates.at('document.type', 'post'),
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  );

  const posts = response.results.map(post => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt:
      post.data.content.find((content: any) => content.type === 'paragraph')
        ?.text ?? '',
    updatedAt: formatDateToLocaleDateString(
      post.last_publication_date as string
    ),
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
