import type { ReactElement } from 'react';
import React from 'react';

// TODO: Complete TagsList component
export const TagsList = (): ReactElement => (
  <div className="sidebar">
    <p>Popular Tags</p>
    <div className="tag-list">
      <a className="tag-pill tag-default" href="/">
        programming
      </a>
      <a className="tag-pill tag-default" href="/">
        javascript
      </a>
      <a className="tag-pill tag-default" href="/">
        angularjs
      </a>
      <a className="tag-pill tag-default" href="/">
        react
      </a>
      <a className="tag-pill tag-default" href="/">
        node
      </a>
    </div>
  </div>
);
