'use client';

import { CreateTodoDTO, TodoDTO, UpdateTodoDTO } from '@/common/dto/TodoDTO';
import { eHttpMethod } from '@/common/enums';
import { useTodoMutation, useTodoQuery } from '@/hooks';
import React, { useState } from 'react';

const HomeModule = () => {
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
    queryConfig: {
      queryParam: '199',
    },
  });
  const {
    mutate: removeTodo,
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
    const dto = new UpdateTodoDTO();

    setCheck(!check);

    dto.completed = check;
    updateTodo(dto);
  };

  const handleUpdateTodo = () => {
    const dto: CreateTodoDTO = {
      completed: check,
      title: 'this is title',
    };

    setCheck(!check);

    updateTodo(dto);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (isDeleteError) return <h1>{deleteError.message}</h1>;
  if (isPending) return <h1>Pending...</h1>;
  return (
    <div>
      <button onClick={() => createTodo({ completed: false, title: 'test tirtle', userId: 1 })}>create</button>
      <button onClick={handleUpdateTodo}>update</button>
      <button onClick={() => removeTodo({})}>remove</button>
      <pre>{JSON.stringify(data)}</pre>{' '}
    </div>
  );
};

export default HomeModule;
