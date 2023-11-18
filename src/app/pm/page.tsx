import { PageProps, prefetchQuery } from './utils';
import { PmModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const PmPage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PmModule />
    </HydrationBoundary>
  );
};

export default PmPage;
