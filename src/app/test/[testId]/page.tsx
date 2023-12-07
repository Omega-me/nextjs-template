import { TestDetailPageProps, prefetchQuery } from './TestDetailPage.utils';
import { TestDetailModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const TestDetailPage = async (props: TestDetailPageProps) => {
  const queryClient = await prefetchQuery(props);

  console.log(props.params.testid);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestDetailModule />
    </HydrationBoundary>
  );
};

export default TestDetailPage;
