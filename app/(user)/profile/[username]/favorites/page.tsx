import type { ReactElement } from 'react';

// TODO: Complete UserProfileFavoritesPage
const UserProfileFavoritesPage = async (): Promise<ReactElement> => (
  <>
    <div className="article-preview">
      <div className="article-meta">
        {/* TODO: Replace with Next.js Link */}
        <a href="/">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          {/* TODO: Replace with Next.js Link */}
          <a className="author" href="/">
            Erica Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      {/* TODO: Replace with Next.js Link */}
      <a className="preview-link" href="/">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
    <div className="article-preview">
      <div className="article-meta">
        {/* TODO: Replace with Next.js Link */}
        <a href="/">
          <img src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          {/* TODO: Replace with Next.js Link */}
          <a className="author" href="/">
            Albert Pai
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> 32
        </button>
      </div>
      {/* TODO: Replace with Next.js Link */}
      <a className="preview-link" href="/">
        <h1>The song you won&apos;t ever stop singing. No matter how hard you try.</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">Music</li>
          <li className="tag-default tag-pill tag-outline">Song</li>
        </ul>
      </a>
    </div>
  </>
);

export default UserProfileFavoritesPage;
