import type { ReactElement } from 'react';

import type { ArticlesResponse } from '~/common/types';
import { ArticlesList } from '~/components/home/ArticlesList';

// TODO: Complete data fetching
const getArticles = async (): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch global feed');
  }

  return response.json();
};

// TODO: Complete GlobalFeed page
const GlobalFeed = async (): Promise<ReactElement> => {
  const data = await getArticles();
  const { articles } = data;

  return <ArticlesList articles={articles} />;
};

export default GlobalFeed;
