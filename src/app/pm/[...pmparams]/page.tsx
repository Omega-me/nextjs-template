import { PageProps, prefetchQuery } from './utils';
import { PmParamsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const PmParamsPage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PmParamsModule />
    </HydrationBoundary>
  );
};

export default PmParamsPage;
