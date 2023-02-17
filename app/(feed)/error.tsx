'use client';

import { useEffect } from 'react';

import type { FC } from 'react';

type Props = {
  error: Error;
};

// TODO: Update Error state
const Error: FC<Props> = ({ error }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      {error.message && <div>{error.message}</div>}
    </div>
  );
};

export default Error;
