// TODO: solve TypeScript issues for parseAuthErrors helper function
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { FormikErrors } from 'formik';
import type { User, UserSettings, UserProfile } from '~/common/types';

// TODO: make refactoring of error parsing
export const parseAuthErrors = <T>(errors: { [key: string]: string[] }): FormikErrors<T> => {
  const parsedErrors: FormikErrors<T> = {};

  if (errors.username) {
    parsedErrors.username = `username ${errors.username[0]}`;
  }

  if (errors.email) {
    parsedErrors.email = `email ${errors.email[0]}`;
  }

  if (errors.password) {
    parsedErrors.password = `password ${errors.password[0]}`;
  }

  if (errors['email or password']) {
    parsedErrors.email = `email or password ${errors['email or password']}`;
  }

  return parsedErrors;
};

export const mapUserDataToUserSettingsData = (user: User): UserSettings => ({
  email: user.email,
  password: '',
  username: user.username,
  bio: user.bio || '',
  image: user.image,
});

export const checkProfileBelongsToUser = (
  userProfile: UserProfile,
  currentUser: User | null
): boolean => {
  if (!currentUser) {
    return false;
  }

  return currentUser.username === userProfile.username;
};
