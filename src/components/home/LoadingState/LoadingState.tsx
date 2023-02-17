import { LoadingSpinner } from '~/components/common/LoadingSpinner/LoadingSpinner';

import styles from './LoadingState.module.css';

import type { ReactElement } from 'react';

export const LoadingState = (): ReactElement => (
  <div className={styles.root}>
    <LoadingSpinner />
  </div>
);
