import Link from 'next/link';

import { USER_SETTINGS_ROUTE } from '~/common/constants';

import type { ReactElement } from 'react';

// TODO: Complete EditProfileLink Component
export const EditProfileLink = (): ReactElement => (
  <Link className="btn btn-sm btn-outline-secondary action-btn" href={USER_SETTINGS_ROUTE}>
    <i className="ion-gear-a"></i> Edit Profile Settings
  </Link>
);
