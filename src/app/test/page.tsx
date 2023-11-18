import { PageProps, prefetchQuery } from './utils';
import { TestModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const TestPage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestModule />
    </HydrationBoundary>
  );
};

export default TestPage;
