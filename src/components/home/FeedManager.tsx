import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

// TODO: Complete FeedManager component
export const FeedManager = (): ReactElement => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <Link className="nav-link active" href="/">
          Global Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/your-feed">
          Your Feed
        </Link>
      </li>
    </ul>
  </div>
);
