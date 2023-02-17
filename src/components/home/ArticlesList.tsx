import { ArticlePreview } from './ArticlePreview';

import type { ReactElement } from 'react';
import type { Article } from '~/common/types';

type Props = {
  articles: Article[];
};

export const ArticlesList = ({ articles }: Props): ReactElement => {
  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
      {/* TODO: add articles pagination */}
    </>
  );
};
