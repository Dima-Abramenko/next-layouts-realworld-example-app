import type { ReactElement } from 'react';

import styles from './LoadingState.module.css';

import { LoadingSpinner } from '~/components/common/LoadingSpinner/LoadingSpinner';

export const LoadingState = (): ReactElement => (
  <div className={styles.root}>
    <LoadingSpinner />
  </div>
);
