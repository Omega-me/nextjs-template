import { TestPageProps, prefetchQuery } from './TestPage.utils';
import { TestModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const TestPage = async (props: TestPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestModule />
    </HydrationBoundary>
  );
};

export default TestPage;
