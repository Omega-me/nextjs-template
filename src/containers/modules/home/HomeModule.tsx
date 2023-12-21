'use client';
import TodoDTO from '@/common/dto/TodoDTO';
import { eHttpMethod } from '@/common/enums';
import { useTodoMutation, useTodoQuery } from '@/hooks';
import React, { useState } from 'react';

export const HomeModule = () => {
  const [check, setCheck] = useState(false);
  const { data, isLoading, isError, error } = useTodoQuery<TodoDTO>({
    queryConfig: {
      queryParam: '199',
      meta: {
        test: 'test',
      },
    },
  });

  const { mutate: createTodo } = useTodoMutation<CreateTodoDTO>();
  const { mutate: updateTodo } = useTodoMutation<UpdateTodoDTO>({
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

  const handleCreateTodo = () => {
    const dto = new Upda();

    setCheck(!check);

    dto.completed = check;
    dto.title = 'this is title';

    updateTodo(dto);
  };

  const handleUpdateTodo = () => {
    const dto = new TodoDTO();

    setCheck(!check);

    dto.completed = check;
    dto.title = 'this is title';

    updateTodo(dto);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (isDeleteError) return <h1>{deleteError.message}</h1>;
  if (isPending) return <h1>Pending...</h1>;
  return (
    <div>
      <button onClick={() => createTodo({ completed: false, title: 'test tirtle', userId: 1 })}>create</button>
      <button onClick={handleUpdate}>update</button>
      <button onClick={() => remove({})}>remove</button>
      <pre>{JSON.stringify(data)}</pre>{' '}
    </div>
  );
};
