import React from 'react';

import { Banner } from '~/components/home/Banner';
import { FeedManager } from '~/components/home/FeedManager';
import { TagsList } from '~/components/home/TagsList';

import type { ReactElement, ReactNode } from 'react';
import type { TagsResponse } from '~/common/types';

// TODO: Complete data fetching
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

// TODO: Complete FeedLayout
const FeedLayout = async ({ children }: Props): Promise<ReactElement> => {
  const data = await getTags();
  const { tags } = data;

  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedManager />
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
