import { TestModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';
import { prefetchQuery } from '../utils';

const TestPage = async () => {
  const queryClient = await prefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestModule />
    </HydrationBoundary>
  );
};

export default TestPage;
