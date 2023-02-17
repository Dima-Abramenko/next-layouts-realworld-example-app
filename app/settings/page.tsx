import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { USER_LOGIN_ROUTE } from '~/common/constants';

import type { ReactElement } from 'react';
import type { User, UserResponse } from '~/common/types';

// TODO: Extract the function to shared folder
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

// TODO: Complete Register page
const Register = async (): Promise<ReactElement> => {
  const user = await getCurrentUser();

  if (!user) {
    redirect(USER_LOGIN_ROUTE);
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    placeholder="URL of profile picture"
                    type="text"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    type="text"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Short bio about you"
                    rows={8}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control" placeholder="Email" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control" placeholder="Password" type="password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" type="button">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
