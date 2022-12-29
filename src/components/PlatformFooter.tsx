import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

// TODO: Complete PlatformFooter component
export const PlatformFooter = (): ReactElement => (
  <footer>
    <div className="container">
      <Link className="logo-font" href="/">
        conduit
      </Link>
      <span className="attribution">
        An interactive learning project from{' '}
        <a href="https://thinkster.io" rel="noreferrer" target="_blank">
          Thinkster
        </a>
        . Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
);
