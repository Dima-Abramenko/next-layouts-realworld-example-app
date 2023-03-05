import { cookies } from 'next/headers';
import React from 'react';

import { Banner } from '~/components/home/Banner';
import { FeedManager } from '~/components/home/FeedManager';
import { TagsList } from '~/components/home/TagsList';

import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';
import type { User, UserResponse } from '~/common/types';
import type { TagsResponse } from '~/common/types';

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

// TODO: Complete data fetching & issue with caching
const getTags = async (): Promise<TagsResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tags`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }

  return response.json();
};

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Home - Conduit',
};

// TODO: Complete FeedLayout
const FeedLayout = async ({ children }: Props): Promise<ReactElement> => {
  const user = await getCurrentUser();

  const data = await getTags();
  const { tags } = data;

  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedManager user={user} />
            {children}
          </div>
          <div className="col-md-3">
            <TagsList tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedLayout;
