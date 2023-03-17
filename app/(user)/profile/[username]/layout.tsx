import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

import { GLOBAL_FEED_ROUTE } from '~/common/constants';
import { ProfileFeedManager } from '~/components/user/ProfileFeedManager';
import { UserInfo } from '~/components/user/UserInfo';
import { checkProfileBelongsToUser } from '~/components/user/utils';

import type { ReactNode } from 'react';
import type { ReactElement } from 'react';
import type { User, UserResponse, UserProfile, UserProfileResponse } from '~/common/types';

const getUserProfile = async (username: string): Promise<UserProfile | null> => {
  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profiles/${username}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const userProfileResponse: UserProfileResponse = await response.json();

  return userProfileResponse.profile;
};

// TODO: Extract the function to shared folder & add caching
const getCurrentUser = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get('auth');

  const hasUserToken = userTokenCookie && userTokenCookie.value;

  if (!hasUserToken) {
    return null;
  }

  // eslint-disable-next-line compat/compat
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
    headers: {
      authorization: `Bearer ${userTokenCookie.value}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const currentUserResponse: UserResponse = await response.json();

  return currentUserResponse.user;
};

type Props = {
  children: ReactNode;
  params: { username: string };
};

// TODO: Complete UserProfileLayout
const UserProfileLayout = async ({
  children,
  params: { username },
}: Props): Promise<ReactElement> => {
  const userProfile = await getUserProfile(username);
  const currentUser = await getCurrentUser();

  if (!userProfile) {
    redirect(GLOBAL_FEED_ROUTE);
  }

  const isProfileBelongsToUser = checkProfileBelongsToUser(userProfile, currentUser);

  return (
    <div className="profile-page">
      <UserInfo isProfileBelongsToUser={isProfileBelongsToUser} userProfile={userProfile} />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ProfileFeedManager
              isProfileBelongsToUser={isProfileBelongsToUser}
              userProfile={userProfile}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
