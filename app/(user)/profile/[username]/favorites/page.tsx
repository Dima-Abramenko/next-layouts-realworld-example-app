// TODO: Think about refactoring of articles components
import { ArticlesList } from '~/components/home/ArticlesList';

import type { ReactElement } from 'react';
import type { ArticlesResponse } from '~/common/types';

// TODO: Complete data fetching
const getFavoritedArticles = async (username: string): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?favorited=${username}`,
    {
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch feed by given tag');
  }

  return response.json();
};

type Props = {
  params: { username: string };
};

// TODO: Complete UserProfileFavoritesPage
const UserProfileFavoritesPage = async ({ params: { username } }: Props): Promise<ReactElement> => {
  const data = await getFavoritedArticles(username);
  const { articles } = data;

  return <ArticlesList articles={articles} />;
};

export default UserProfileFavoritesPage;
