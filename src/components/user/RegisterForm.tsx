'use client';
import { Formik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

import { INITIAL_USER_REGISTER_DATA } from './constants';
import { parseAuthErrors } from './utils';

import type { FormikHelpers } from 'formik';
import type { FormEvent, ReactElement } from 'react';
import type { UserRegister } from '~/common/types';

// TODO: Complete RegisterForm component
export const RegisterForm = (): ReactElement => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // TODO: reimplement with httpOnly Cookies
  const handleSubmitForm = async (
    { username, email, password }: UserRegister,
    { setErrors }: FormikHelpers<UserRegister>
  ): Promise<void> => {
    // eslint-disable-next-line compat/compat
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        user: { username, email, password },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      const parsedErrors = parseAuthErrors<UserRegister>(errorData.errors);
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
    <Formik initialValues={INITIAL_USER_REGISTER_DATA} onSubmit={handleSubmitForm}>
      {({ values, errors, handleChange, handleSubmit, isSubmitting }): ReactElement => (
        <form
          noValidate
          onSubmit={(event: FormEvent<HTMLFormElement>): void => event.preventDefault()}
        >
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              name="username"
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
              value={values.username}
            />
            {errors.username && <div className="error-messages">{errors.username}</div>}
          </fieldset>
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
            Sign up
          </button>
        </form>
      )}
    </Formik>
  );
};
