import type { FC } from 'react';

// TODO: Complete TagFeed page
const TagFeed: FC = () => (
  <>
    <div className="article-preview">
      <div className="article-meta">
        {/* TODO: replace with Link tag */}
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="user avatar" src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          {/* TODO: replace with Link tag */}
          <a className="author" href="/">
            Don Derri
          </a>
          <span className="date">January 11th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> 100
        </button>
      </div>
      {/* TODO: replace with Link tag */}
      <a className="preview-link" href="/">
        <h1>Some very very long title</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline ">javascript</li>
        </ul>
      </a>
    </div>
  </>
);

export default TagFeed;
