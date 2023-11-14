import { SearchModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';
import { prefetchQuery } from './utils';

const SearchPage = async () => {
  const queryClient = await prefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchModule />
    </HydrationBoundary>
  );
};

export default SearchPage;
