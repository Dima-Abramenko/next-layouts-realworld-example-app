import { ArticlesList } from '~/components/home/ArticlesList';

import type { ReactElement } from 'react';
import type { ArticlesResponse } from '~/common/types';

// TODO: Complete data fetching
const getArticles = async (tag: string): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?tag=${tag}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch feed by given tag');
  }

  return response.json();
};

type Props = {
  params: { tag: string };
};

// TODO: Complete TagFeed page
const TagFeed = async ({ params: { tag } }: Props): Promise<ReactElement> => {
  const data = await getArticles(tag);
  const { articles } = data;

  return <ArticlesList articles={articles} />;
};

export default TagFeed;
