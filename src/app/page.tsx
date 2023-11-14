import { HomeModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { prefetchQuery } from './utils';

export default async function HomePage() {
  const queryClient = await prefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
}
