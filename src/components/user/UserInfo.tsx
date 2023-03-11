import type { ReactElement } from 'react';
import type { UserProfile } from '~/common/types';

type Props = {
  userProfile: UserProfile;
};

export const UserInfo = ({ userProfile }: Props): ReactElement => {
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
            {/* TODO: Implement follow feature */}
            <button className="btn btn-sm btn-outline-secondary action-btn" type="button">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {username}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
