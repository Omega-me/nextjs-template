import { HomePageProps, prefetchQuery } from './HomePage.utils';
import { HomeModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const HomePage = async (props: HomePageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
};

export default HomePage;
