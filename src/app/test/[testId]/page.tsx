import { TestDetailModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';
import { prefetchQuery } from '../utils';

const TestDetailPage = async () => {
  const queryClient = await prefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestDetailModule />
    </HydrationBoundary>
  );
};

export default TestDetailPage;
