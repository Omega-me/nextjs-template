import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { IQueryOpts } from '@/common/interfaces';
import { generatUrlAndKeys } from '@/common/utils';
import { httpClient } from '@/services';
import { QueryClient, useQuery } from '@tanstack/react-query';

/**
 *
 * @param opts
 */
export const prefetchTodo = async <TData,>(opts: { queryClient: QueryClient; config: IQueryOpts<TData> }) => {
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
    ...opts.config.queryConfig,
  });
};

/**
 *
 * @param opts
 * @returns
 */
export const useTodoQuery = <TData,>(opts?: IQueryOpts<TData>) => {
  const { url, keys, axiosConfig } = generatUrlAndKeys({
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

  return {
    data: data as TData,
    ...query,
  };
};
