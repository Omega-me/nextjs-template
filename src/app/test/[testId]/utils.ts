import { QueryClient } from '@tanstack/react-query';

export interface PageProps {
  params: {
    [key: string]: string | string[];
  };
  searchParams: {
    [key: string]: string | string[];
  };
}

export const prefetchQuery = async (props: PageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
