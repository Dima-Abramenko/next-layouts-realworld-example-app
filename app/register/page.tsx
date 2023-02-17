import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { GLOBAL_FEED_ROUTE, USER_LOGIN_ROUTE } from '~/common/constants';
import { RegisterForm } from '~/components/user/RegisterForm';

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

  if (user) {
    redirect(GLOBAL_FEED_ROUTE);
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href={USER_LOGIN_ROUTE}>Have an account?</Link>
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
