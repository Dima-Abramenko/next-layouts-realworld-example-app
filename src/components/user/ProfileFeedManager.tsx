'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { USER_PROFILE_FAVORITES_ROUTE, USER_PROFILE_ROUTE } from '~/common/constants';
import { replaceDynamicRoute } from '~/common/utils';

import type { ReactElement } from 'react';
import type { UserProfile } from '~/common/types';

type Props = {
  isProfileBelongsToUser: boolean;
  userProfile: UserProfile;
};

// TODO: Complete ProfileFeedManager component
export const ProfileFeedManager = ({
  isProfileBelongsToUser,
  userProfile: { username },
}: Props): ReactElement => {
  const path = usePathname();

  const primaryTabLabel = isProfileBelongsToUser ? 'My Articles' : `${username}'s Articles`;

  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              path === replaceDynamicRoute(USER_PROFILE_ROUTE, 'username', username) && `active`
            }`}
            href={replaceDynamicRoute(USER_PROFILE_ROUTE, 'username', username)}
          >
            {primaryTabLabel}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              path === replaceDynamicRoute(USER_PROFILE_FAVORITES_ROUTE, 'username', username) &&
              `active`
            }`}
            href={replaceDynamicRoute(USER_PROFILE_FAVORITES_ROUTE, 'username', username)}
          >
            Favorited Articles
          </Link>
        </li>
      </ul>
    </div>
  );
};
