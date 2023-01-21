import type { FC } from 'react';

import styles from './loading.module.css';

import { LoadingSpinner } from '~/components/common/LoadingSpinner/LoadingSpinner';

const Loading: FC = () => (
  <div className={styles.root}>
    <LoadingSpinner />
  </div>
);

export default Loading;
