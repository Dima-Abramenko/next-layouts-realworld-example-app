import Image from 'next/image';
import Link from 'next/link';

import { USER_PROFILE_ROUTE } from '~/common/constants';
import { replaceDynamicRoute } from '~/common/utils';

import type { ReactElement } from 'react';
import type { Article } from '~/common/types';

type Props = {
  article: Article;
};

// TODO: Complete ArticlePreview component
export const ArticlePreview = ({ article }: Props): ReactElement => {
  const { author, slug, title, description, favoritesCount, createdAt, tagList } = article;

  return (
    <div className="article-preview" key={slug}>
      <div className="article-meta">
        <Link href={replaceDynamicRoute(USER_PROFILE_ROUTE, 'username', author.username)}>
          <Image alt="user avatar" height="32" src={author.image} width="32" />
        </Link>
        <div className="info">
          <Link
            className="author"
            href={replaceDynamicRoute(USER_PROFILE_ROUTE, 'username', author.username)}
          >
            {author.username}
          </Link>
          <span className="date">{createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      {/* TODO: replace with Link tag */}
      <a className="preview-link" href="/">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        {tagList.length && (
          <ul className="tag-list">
            {tagList.map((tag) => (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </a>
    </div>
  );
};
