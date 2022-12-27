import type { ReactElement } from 'react';

const Head = (): ReactElement => {
  return (
    <>
      <title>Conduit</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="RealWorld app implementation powered by Next.js 13+ (Layout, Server Components and so on)" />
      <link rel="icon" href="/public/favicon.ico" />
    </>
  )
}

export default Head;
