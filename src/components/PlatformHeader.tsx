import Link from 'next/link';
import React from 'react';

import {
  GLOBAL_FEED_ROUTE,
  USER_LOGIN_ROUTE,
  USER_PROFILE_ROUTE,
  USER_REGISTER_ROUTE,
  USER_SETTINGS_ROUTE,
} from '~/common/constants';
import { replaceDynamicRoute } from '~/common/utils';

import type { ReactElement } from 'react';
import type { User } from '~/common/types';

type Props = {
  user: User | null;
};

// TODO: Complete PlatformHeader component
export const PlatformHeader = ({ user }: Props): ReactElement => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand" href={GLOBAL_FEED_ROUTE}>
        conduit
      </Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          {/* Add "active" class when you're on that page */}
          <Link className="nav-link active" href={GLOBAL_FEED_ROUTE}>
            Home
          </Link>
        </li>
        {!user && (
          <>
            <li className="nav-item">
              <Link className="nav-link" href={USER_LOGIN_ROUTE}>
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={USER_REGISTER_ROUTE}>
                Sign up
              </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li className="nav-item">
              {/* TODO: Implement "New Article" route */}
              <Link className="nav-link" href="/">
                <i className="ion-compose"></i>&nbsp;New Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={USER_SETTINGS_ROUTE}>
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href={replaceDynamicRoute(USER_PROFILE_ROUTE, 'username', user.username)}
              >
                {/* TODO: Replace with Next Image component */}
                <img alt="current user profile image" className="user-pic" src={user.image} />
                {user.username}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </nav>
);
