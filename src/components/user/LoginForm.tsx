'use client';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import type { FormEvent, ReactElement } from 'react';
import { useTransition } from 'react';

import { INITIAL_USER_LOGIN_DATA } from './constants';
import { parseAuthErrors } from './utils';

import type { UserLogin } from '~/common/types';

// TODO: Complete LoginForm component
export const LoginForm = (): ReactElement => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // TODO: reimplement with httpOnly Cookies
  const handleSubmitForm = async (
    { email, password }: UserLogin,
    { setErrors }: FormikHelpers<UserLogin>
  ): Promise<void> => {
    // eslint-disable-next-line compat/compat
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        user: { email, password },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      const parsedErrors = parseAuthErrors<UserLogin>(errorData.errors);
      setErrors(parsedErrors);

      return;
    }

    const userData = await response.json();

    const {
      user: { token },
    } = userData;

    Cookies.set('auth', token, {
      expires: 1,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  // TODO: add client-side validation
  return (
    <Formik initialValues={INITIAL_USER_LOGIN_DATA} onSubmit={handleSubmitForm}>
      {({ values, errors, handleChange, handleSubmit, isSubmitting }): ReactElement => (
        <form
          noValidate
          onSubmit={(event: FormEvent<HTMLFormElement>): void => event.preventDefault()}
        >
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              type="text"
              value={values.email}
            />
            {errors.email && <div className="error-messages">{errors.email}</div>}
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              type="password"
              value={values.password}
            />
            {errors.password && <div className="error-messages">{errors.password}</div>}
          </fieldset>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            disabled={isPending || isSubmitting}
            onClick={(): void => handleSubmit()}
            type="submit"
          >
            Sign in
          </button>
        </form>
      )}
    </Formik>
  );
};
