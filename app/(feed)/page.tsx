import type { FC } from 'react';

// TODO: Complete GlobalFeed page
const GlobalFeed: FC = () => (
  <>
    <div className="article-preview">
      <div className="article-meta">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="user avatar" src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a className="author" href="/">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a className="preview-link" href="/">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
  </>
);

export default GlobalFeed;
