import { TestModule } from '@/containers/modules';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';

const TestPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestModule />
    </HydrationBoundary>
  );
};

export default TestPage;
