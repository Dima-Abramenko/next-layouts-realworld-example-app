import Image from 'next/image';
import type { ReactElement } from 'react';

import type { ArticlesResponse } from '~/common/types';

// TODO: Complete data fetching
const getArticles = async (): Promise<ArticlesResponse> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.API_BASE_URL}/articles`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to fetch global feed');
  }

  return response.json();
};

// TODO: Complete GlobalFeed page
const GlobalFeed = async (): Promise<ReactElement> => {
  const data = await getArticles();
  const { articles } = data;

  return (
    <>
      {articles.map((article) => (
        <div className="article-preview" key={article.slug}>
          <div className="article-meta">
            {/* TODO: replace with Link tag */}
            <a href="/">
              <Image alt="user avatar" height="32" src={article.author.image} width="32" />
            </a>
            <div className="info">
              {/* TODO: replace with Link tag */}
              <a className="author" href="/">
                {article.author.username}
              </a>
              <span className="date">{article.createdAt}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          {/* TODO: replace with Link tag */}
          <a className="preview-link" href="/">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
          </a>
        </div>
      ))}
    </>
  );
};

export default GlobalFeed;
