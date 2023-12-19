import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { IMuattionOpts, IQueryOpts } from '@/common/interfaces';
import { generatUrlAndKeys } from '@/common/utils';
import { httpClient } from '@/services';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

/**
 *
 * @param opts
 */
export const prefetchTodo = async <TData,>(opts: { queryClient: QueryClient; config?: IQueryOpts<TData> }) => {
  const { url, keys, axiosConfig } = generatUrlAndKeys({
    config: opts.config,
    keys: [eApiRoutes.TODOS],
    url: eApiRoutes.TODOS,
  });

  await opts.queryClient.prefetchQuery({
    queryKey: keys,
    queryFn: () =>
      httpClient(eHttpMethod.GET, url, {
        axiosConfig,
        message: opts.config?.httpConfig?.message,
        ...opts.config?.httpConfig,
      }),
    ...opts?.config?.queryConfig,
  });
};

/**
 *
 * @param opts
 * @returns
 */
export const useTodoQuery = <TData,>(opts?: IQueryOpts<TData>) => {
  const queryClient = useQueryClient();

  const { url, keys, axiosConfig } = generatUrlAndKeys<TData>({
    config: opts,
    keys: [eApiRoutes.TODOS],
    url: eApiRoutes.TODOS,
  });

  const { data, ...query } = useQuery({
    queryKey: keys,
    queryFn: () =>
      httpClient(eHttpMethod.GET, url, {
        axiosConfig,
        message: opts?.httpConfig?.message,
        ...opts?.httpConfig,
      }),
    ...opts?.queryConfig,
  });

  const getCachedData = <TData,>(): TData | undefined => {
    return queryClient.getQueryData(keys);
  };

  return {
    data: data as TData,
    getCachedData,
    ...query,
  };
};

/**
 *
 * @param opts
 */
export const useTodoMutation = <TData,>(opts?: IMuattionOpts<TData>) => {
  const queryClient = useQueryClient();
  const { url, keys, axiosConfig, methode, hasInvalidation, hasErrorHandling } = generatUrlAndKeys<TData>({
    config: opts,
    keys: [eApiRoutes.TODOS],
    url: eApiRoutes.TODOS,
    isMuatation: true,
  });

  const mutation = useMutation({
    mutationKey: keys,
    mutationFn: (variables: TData) =>
      httpClient<TData>(methode as eHttpMethod, url, {
        data: variables,
        axiosConfig,
        message: opts?.httpConfig?.message,
        ...opts?.httpConfig,
      }),
    onSuccess(data, variables, context) {
      if (hasInvalidation) {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.TODOS],
        });
      }
      if (opts?.queryConfig?.onSuccessFn) {
        opts?.queryConfig?.onSuccessFn(data, variables, context);
      }
    },
    onError(error, variables, context) {
      if (hasErrorHandling) {
        // Do something with the error
      }
      if (opts?.queryConfig?.onErrorFn) {
        opts?.queryConfig?.onErrorFn(error, variables, context);
      }
    },
    ...opts?.queryConfig,
  });

  const getCachedData = <TData,>(): TData | undefined => {
    return queryClient.getQueryData(keys);
  };

  return {
    ...mutation,
    getCachedData,
  };
};
