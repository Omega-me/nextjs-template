import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface TestPageProps extends IPageProps {}

export const prefetchQuery = async (props: TestPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
