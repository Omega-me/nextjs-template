import { QueryClient } from '@tanstack/react-query';

export const prefetchQuery = async (): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
