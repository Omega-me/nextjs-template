import { HomeModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { prefetchQueryData } from './utils';

export default async function HomePage() {
  const queryClient = await prefetchQueryData();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
}
