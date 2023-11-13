'use client';

import { useTodoQuery } from '@/hooks';
import React from 'react';

const HomeModule = () => {
  const { data: datas } = useTodoQuery({
    queryConfig: {
      meta: {
        test: 'test',
      },
    },
  });
  const { data } = useTodoQuery({
    queryConfig: {
      queryParam: '1',
    },
  });

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>{' '}
    </div>
  );
};

export default HomeModule;
