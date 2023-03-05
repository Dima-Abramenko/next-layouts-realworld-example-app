import { cookies } from 'next/headers';
import React from 'react';

import { PlatformFooter } from '~/components/PlatformFooter';
import { PlatformHeader } from '~/components/PlatformHeader';

import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';
import type { User, UserResponse } from '~/common/types';

type Props = {
  children: ReactNode;
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

export const metadata: Metadata = {
  title: 'Conduit',
  description:
    'RealWorld app implementation powered by Next.js 13+ (Layout, Server Components and so on)',
  viewport: { width: 'device-width', initialScale: 1 },
};

const RootLayout = async ({ children }: Props): Promise<ReactElement> => {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PlatformHeader user={user} />
        {children}
        <PlatformFooter />
      </body>
    </html>
  );
};

export default RootLayout;
