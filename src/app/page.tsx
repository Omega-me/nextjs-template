import { PageProps, prefetchQuery } from './utils';
import { HomeModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const HomePage = async (props: PageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
};

export default HomePage;
