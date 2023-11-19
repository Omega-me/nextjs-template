import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface PageProps extends IPageProps {
  params: { pmparams: string[] };
}

export const prefetchQuery = async (props: PageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
