import { PageProps, prefetchQuery } from './utils';
import { TestDetailModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const TestDetailPage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestDetailModule />
    </HydrationBoundary>
  );
};

export default TestDetailPage;
