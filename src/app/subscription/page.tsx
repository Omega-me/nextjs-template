import React from 'react';
import { prefetchQuery } from '../utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { SubscriptionModule } from '@/containers/modules';

const SubscriptionPage = async () => {
  const queryClient = await prefetchQuery();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SubscriptionModule />
    </HydrationBoundary>
  );
};

export default SubscriptionPage;
