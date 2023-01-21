import type { ReactElement } from 'react';

import type { ArticlesResponse } from '~/common/types';
import { ArticlePreview } from '~/components/home/ArticlePreview';

// TODO: Complete data fetching
const getArticles = async (): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.API_BASE_URL}/articles`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to fetch global feed');
  }

  return response.json();
};

// TODO: Complete GlobalFeed page
const GlobalFeed = async (): Promise<ReactElement> => {
  const data = await getArticles();
  const { articles } = data;

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </>
  );
};

export default GlobalFeed;
