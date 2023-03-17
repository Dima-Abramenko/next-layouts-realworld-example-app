import { EditProfileLink } from '~/components/user/EditProfileLink';
import { FollowUserButton } from '~/components/user/FollowUserButton';

import type { ReactElement } from 'react';
import type { UserProfile } from '~/common/types';

type Props = {
  isProfileBelongsToUser: boolean;
  userProfile: UserProfile;
};

export const UserInfo = ({ isProfileBelongsToUser, userProfile }: Props): ReactElement => {
  const { username, image, bio } = userProfile;

  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            {/* TODO: replace with Next.js image */}
            <img alt="user profile image" className="user-img" src={image} />
            <h4>{username}</h4>
            {bio && <p>{bio}</p>}
            {isProfileBelongsToUser ? (
              <EditProfileLink />
            ) : (
              <FollowUserButton userProfile={userProfile} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
