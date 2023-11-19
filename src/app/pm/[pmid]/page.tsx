import { PageProps, prefetchQuery } from './utils';
import { PmIdModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const PmIdPage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PmIdModule />
    </HydrationBoundary>
  );
};

export default PmIdPage;
