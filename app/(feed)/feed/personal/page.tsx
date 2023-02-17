import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { USER_LOGIN_ROUTE } from '~/common/constants';
import { ArticlesList } from '~/components/home/ArticlesList';

import type { ReactElement } from 'react';
import type { User, UserResponse } from '~/common/types';
import type { ArticlesResponse } from '~/common/types';

// TODO: Extract the function to shared folder & add caching
const getCurrentUser = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get('auth');

  const hasUserToken = userTokenCookie && userTokenCookie.value;

  if (!hasUserToken) {
    return null;
  }

  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
    headers: {
      authorization: `Bearer ${userTokenCookie.value}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const currentUserResponse: UserResponse = await response.json();

  return currentUserResponse.user;
};

// TODO: Complete data fetching
const getArticles = async (user: User): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/feed`, {
    cache: 'no-store',
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch your personal feed');
  }

  return response.json();
};

// TODO: Complete TagFeed page
const YourFeed = async (): Promise<ReactElement> => {
  const user = await getCurrentUser();

  if (!user) {
    redirect(USER_LOGIN_ROUTE);
  }

  const data = await getArticles(user);
  const { articles } = data;

  return <ArticlesList articles={articles} />;
};

export default YourFeed;
