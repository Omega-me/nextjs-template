'use client';

import { useTodoQuery } from '@/hooks';
import React from 'react';

const HomeModule = () => {
  useTodoQuery({
    queryConfig: {
      meta: {
        test: 'test',
      },
    },
  });
  const { data, isLoading, isError, error } = useTodoQuery({
    queryConfig: {
      queryParam: '1',
      meta: {
        test: 'test',
      },
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>{' '}
    </div>
  );
};

export default HomeModule;
