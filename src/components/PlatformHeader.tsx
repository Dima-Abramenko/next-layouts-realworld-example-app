import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import type { User } from '~/common/types';

type Props = {
  user: User | null;
};

// TODO: Complete PlatformHeader component
export const PlatformHeader = ({ user }: Props): ReactElement => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand" href="/">
        conduit
      </Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          {/* Add "active" class when you're on that page */}
          <Link className="nav-link active" href="/">
            Home
          </Link>
        </li>
        {!user && (
          <>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/register">
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
              {/* TODO: Implement "Settings" route */}
              <Link className="nav-link" href="/">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li className="nav-item">
              {/* TODO: Implement "User Profile" route */}
              <Link className="nav-link" href="/">
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
