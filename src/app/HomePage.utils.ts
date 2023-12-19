import { IPageProps } from '@/common/interfaces';
import { prefetchTodo } from '@/hooks';
import { QueryClient } from '@tanstack/react-query';

export interface HomePageProps extends IPageProps {}

export const prefetchQuery = async (props: HomePageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  await prefetchTodo({
    queryClient,
  });

  await prefetchTodo({
    queryClient,
    config: {
      queryConfig: {
        queryParam: '199',
      },
    },
  });

  return queryClient;
};
