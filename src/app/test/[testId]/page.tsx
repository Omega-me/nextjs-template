import { TestDetailModule } from '@/containers/modules';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';

const TestDetailPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestDetailModule />
    </HydrationBoundary>
  );
};

export default TestDetailPage;
