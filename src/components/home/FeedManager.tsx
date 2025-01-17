'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { GLOBAL_FEED_ROUTE, PERSONAL_FEED_ROUTE, TAG_FEED_ROUTE } from '~/common/constants';
import { replaceDynamicRoute } from '~/common/utils';

import { getTagFromFeedPath } from './utils';

import type { ReactElement } from 'react';
import type { User } from '~/common/types';

type Props = {
  user: User | null;
};
// TODO: Complete FeedManager component
export const FeedManager = ({ user }: Props): ReactElement => {
  const path = usePathname();
  const tag = getTagFromFeedPath(path);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          {/* TODO: refactoring of tab highlighting */}
          <Link
            className={`nav-link ${path === GLOBAL_FEED_ROUTE && `active`}`}
            href={GLOBAL_FEED_ROUTE}
          >
            Global Feed
          </Link>
        </li>
        {user && (
          <li className="nav-item">
            {/* TODO: refactoring of tab highlighting */}
            <Link
              className={`nav-link ${path === PERSONAL_FEED_ROUTE && `active`}`}
              href={PERSONAL_FEED_ROUTE}
            >
              Your Feed
            </Link>
          </li>
        )}
        {tag && (
          <li className="nav-item">
            {/* TODO: refactoring of tab highlighting */}
            <Link
              className={`nav-link ${
                path === replaceDynamicRoute(TAG_FEED_ROUTE, 'tag', tag) && `active`
              }`}
              href={replaceDynamicRoute(TAG_FEED_ROUTE, 'tag', tag)}
            >
              # {tag}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
