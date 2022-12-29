import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import { Banner } from '~/components/home/Banner';
import { FeedManager } from '~/components/home/FeedManager';
import { TagsList } from '~/components/home/TagsList';

type Props = {
  children: ReactNode;
};

// TODO: Complete FeedLayout
const FeedLayout = ({ children }: Props): ReactElement => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <FeedManager />
          {children}
        </div>
        <div className="col-md-3">
          <TagsList />
        </div>
      </div>
    </div>
  </div>
);

export default FeedLayout;
