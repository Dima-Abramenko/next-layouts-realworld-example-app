import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import { TAG_FEED_ROUTE } from '~/common/constants';
import { replaceDynamicRoute } from '~/components/home/utils';

type Props = {
  tags: string[];
};

// TODO: Complete TagsList component
export const TagsList = ({ tags }: Props): ReactElement => (
  <div className="sidebar">
    <p>Popular Tags</p>
    <div className="tag-list">
      {tags.map((tag) => (
        <Link
          className="tag-pill tag-default"
          href={replaceDynamicRoute(TAG_FEED_ROUTE, 'tag', tag)}
          key={tag}
        >
          {tag}
        </Link>
      ))}
    </div>
  </div>
);
