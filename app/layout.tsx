import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import { PlatformFooter } from '~/components/PlatformFooter';
import { PlatformHeader } from '~/components/PlatformHeader';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props): ReactElement => (
  <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body>
      <PlatformHeader />
      {children}
      <PlatformFooter />
    </body>
  </html>
);

export default RootLayout;
