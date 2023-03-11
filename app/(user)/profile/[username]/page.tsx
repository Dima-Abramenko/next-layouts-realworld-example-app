import { redirect } from 'next/navigation';

import { GLOBAL_FEED_ROUTE } from '~/common/constants';
import { UserInfo } from '~/components/user/UserInfo';

import type { ReactElement } from 'react';
import type { UserProfile } from '~/common/types';
import type { UserProfileResponse } from '~/common/types';

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

type Props = {
  params: { username: string };
};

const UserProfilePage = async ({ params: { username } }: Props): Promise<ReactElement> => {
  const userProfile = await getUserProfile(username);

  if (!userProfile) {
    redirect(GLOBAL_FEED_ROUTE);
  }

  return (
    <div className="profile-page">
      <UserInfo userProfile={userProfile} />

      {/* TODO: Complete Articles section for User Profile */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  {/* TODO: Replace with Next.js Link */}
                  <a className="nav-link active" href="/">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  {/* TODO: Replace with Next.js Link */}
                  <a className="nav-link" href="/">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                {/* TODO: Replace with Next.js Link */}
                <a href="/">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  {/* TODO: Replace with Next.js Link */}
                  <a className="author" href="/">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              {/* TODO: Replace with Next.js Link */}
              <a className="preview-link" href="/">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                {/* TODO: Replace with Next.js Link */}
                <a href="/">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  {/* TODO: Replace with Next.js Link */}
                  <a className="author" href="/">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              {/* TODO: Replace with Next.js Link */}
              <a className="preview-link" href="/">
                <h1>The song you won&apos;t ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
