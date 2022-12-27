import type { ReactElement } from 'react';

const Head = (): ReactElement => (
  <>
    <title>Conduit</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta
      content="RealWorld app implementation powered by Next.js 13+ (Layout, Server Components and so on)"
      name="description"
    />
    <link href="/public/favicon.ico" rel="icon" />
  </>
);

export default Head;
