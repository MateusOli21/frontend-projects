import React from 'react';
import Link from 'next/link';

import { PostPreviewProps } from '@modules/Posts/types';

import { Container } from './styles';

interface PostPreviewCardProps {
  post: PostPreviewProps;
}

export const PostPreviewCard: React.FC<PostPreviewCardProps> = ({ post }) => {
  return (
    <Link
      href={{ pathname: '/posts/preview/[slug]', query: { slug: post.slug } }}
    >
      <Container>
        <time>{post.updatedAt}</time>
        <strong>{post.title}</strong>
        <p>{post.excerpt}</p>
      </Container>
    </Link>
  );
};
