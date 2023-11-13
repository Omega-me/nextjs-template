import { prefetchTodo } from '@/hooks';
import { QueryClient } from '@tanstack/react-query';

export const prefetchQueryData = async (): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  await prefetchTodo({
    queryClient,
    config: {},
  });

  await prefetchTodo({
    queryClient,
    config: {
      queryConfig: {
        queryParam: '1',
      },
    },
  });

  return queryClient;
};
