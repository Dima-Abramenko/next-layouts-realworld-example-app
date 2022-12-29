import type { FC } from 'react';

// TODO: Complete YourFeed page
const YourFeed: FC = () => (
  <>
    <div className="article-preview">
      <div className="article-meta">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="user avatar" src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          <a className="author" href="/">
            Albert Pai
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> 32
        </button>
      </div>
      <a className="preview-link" href="/">
        <h1>The song you will not ever stop singing. No matter how hard you try.</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
  </>
);

export default YourFeed;
