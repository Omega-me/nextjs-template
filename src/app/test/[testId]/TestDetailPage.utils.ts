import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface TestDetailPageProps extends IPageProps {
  params: { testid: string };
}

export const prefetchQuery = async (props: TestDetailPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
