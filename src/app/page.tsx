import { HomeModule } from '@/containers/modules';
import { prefetchTodo } from '@/hooks';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await prefetchTodo({
    queryClient,
    config: {
      httpConfig: {
        axiosConfig: {
          hasAuth: false,
        },
      },
    },
  });

  await prefetchTodo({
    queryClient,
    config: {
      queryConfig: {
        queryParam: '1',
      },
      httpConfig: {
        axiosConfig: {
          hasAuth: false,
        },
      },
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
}
