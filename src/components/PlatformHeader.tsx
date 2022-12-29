import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

// TODO: Complete PlatformHeader component
export const PlatformHeader = (): ReactElement => (
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
      </ul>
    </div>
  </nav>
);
