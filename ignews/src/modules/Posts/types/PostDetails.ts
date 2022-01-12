import { RichTextBlock } from 'prismic-reactjs';

export interface PostDetailsProps {
  slug: string;
  title: string;
  content: RichTextBlock[];
  updatedAt: string;
}
