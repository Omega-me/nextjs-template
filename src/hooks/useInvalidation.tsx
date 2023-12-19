import { InvalidateOptions, InvalidateQueryFilters, QueryKey, useQueryClient } from '@tanstack/react-query';

const useInvalidate = () => {
  const queryClient = useQueryClient();

  /**
   *
   * @param queryKeys
   */
  const invalidateQuery = (filters?: InvalidateQueryFilters | undefined, options?: InvalidateOptions | undefined) => {
    queryClient.invalidateQueries(filters, options);
  };

  /**
   *
   * @param queryKey
   * @param filters
   * @returns
   */
  const getCachedData = <TData,>(queryKey: QueryKey): TData | undefined => {
    return queryClient.getQueryData(queryKey);
  };

  return {
    invalidateQuery,
    getCachedData,
  };
};

export default useInvalidate;
