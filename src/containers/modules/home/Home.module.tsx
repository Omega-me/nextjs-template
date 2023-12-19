'use client';

import { eHttpMethod } from '@/common/enums';
import { useTodoMutation, useTodoQuery } from '@/hooks';
import React, { useState } from 'react';

interface Todo {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}

const HomeModule = () => {
  const [check, setCheck] = useState(false);
  const { data, isLoading, isError, error } = useTodoQuery({
    queryConfig: {
      queryParam: '199',
      meta: {
        test: 'test',
      },
    },
  });

  const { mutate } = useTodoMutation<Todo>();
  const { mutate: update } = useTodoMutation<Todo>({
    httpConfig: {},
    queryConfig: {
      queryParam: '199',
    },
  });
  const {
    mutate: remove,
    isPending,
    isError: isDeleteError,
    error: deleteError,
  } = useTodoMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryUrl: '199/test',
    },
  });

  const handleUpdate = () => {
    setCheck(!check);
    update({
      completed: check,
      title: 'Test title',
    });
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (isDeleteError) return <h1>{deleteError.message}</h1>;
  if (isPending) return <h1>Pending...</h1>;
  return (
    <div>
      <button onClick={() => mutate({ completed: false, title: 'test tirtle', userId: 1 })}>create</button>
      <button onClick={handleUpdate}>update</button>
      <button onClick={() => remove({})}>remove</button>
      <pre>{JSON.stringify(data)}</pre>{' '}
    </div>
  );
};

export default HomeModule;
