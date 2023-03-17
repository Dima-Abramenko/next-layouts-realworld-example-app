import type { ReactElement } from 'react';
import type { UserProfile } from '~/common/types';

type Props = {
  userProfile: UserProfile;
};

// TODO: Complete FollowUserButton component
export const FollowUserButton = ({ userProfile }: Props): ReactElement => (
  <button className="btn btn-sm btn-outline-secondary action-btn" type="button">
    <i className="ion-plus-round"></i>
    &nbsp; Follow {userProfile.username}
  </button>
);
