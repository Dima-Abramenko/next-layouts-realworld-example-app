'use client';
import { Formik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useMemo, useTransition } from 'react';

import { mapUserDataToUserSettingsData } from './utils';

import type { ReactElement, FormEvent } from 'react';
import type { User, UserSettings } from '~/common/types';

type Props = {
  user: User;
};

// TODO: Complete SettingsForm component
export const SettingsForm = ({ user }: Props): ReactElement => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const INITIAL_USER_SETTINGS_DATA = useMemo(() => mapUserDataToUserSettingsData(user), [user]);

  const handleSubmitForm = async ({
    username,
    email,
    password,
    bio,
    image,
  }: UserSettings): Promise<void> => {
    // TODO: handle API errors
    // eslint-disable-next-line compat/compat
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
      method: 'PUT',
      body: JSON.stringify({
        user: { username, email, password, bio, image },
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${user.token}`,
      },
    });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  const logoutUser = (): void => {
    Cookies.remove('auth');

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  return (
    <>
      <Formik initialValues={INITIAL_USER_SETTINGS_DATA} onSubmit={handleSubmitForm}>
        {({ values, handleChange, handleSubmit, isSubmitting }): ReactElement => (
          <form
            noValidate
            onSubmit={(event: FormEvent<HTMLFormElement>): void => event.preventDefault()}
          >
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  name="image"
                  onChange={handleChange}
                  placeholder="URL of profile picture"
                  type="text"
                  value={values.image}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  name="username"
                  onChange={handleChange}
                  placeholder="Your Name"
                  type="text"
                  value={values.username}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  name="bio"
                  onChange={handleChange}
                  placeholder="Short bio about you"
                  rows={8}
                  value={values.bio}
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  type="text"
                  value={values.email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  value={values.password}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                disabled={isPending || isSubmitting}
                onClick={(): void => handleSubmit()}
                type="submit"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
        )}
      </Formik>
      <hr />
      <button className="btn btn-outline-danger" onClick={(): void => logoutUser()} type="button">
        Or click here to logout.
      </button>
    </>
  );
};
