import { QueryKey } from '@tanstack/react-query';
import { IQueryOpts } from '../interfaces';
import { AxiosRequestConfig } from 'axios';
import { eApiRoutes } from '../enums';

/**
 *
 * @param opts
 * @returns
 */
export const generatUrlAndKeys = (opts: {
  config?: IQueryOpts<any>;
  url: string;
  keys: string[];
}): {
  url: string;
  keys: QueryKey;
  axiosConfig: AxiosRequestConfig;
} => {
  let url: string = eApiRoutes.TODOS;
  let keys: QueryKey = [eApiRoutes.TODOS];
  let hasAuthentication = true;

  if (opts.config?.queryConfig?.queryUrl) {
    url = `${opts.url}/${opts.config.queryConfig.queryUrl}`;
    keys = [...keys, opts.config.queryConfig.queryUrl];
  }
  if (opts.config?.queryConfig?.queryParam) {
    url = `${opts.url}/${opts.config.queryConfig.queryParam}`;
    keys = [...keys, opts.config.queryConfig.queryParam];
  }
  if (opts.config?.queryConfig?.queryString) {
    url = `${opts.url}?${opts.config.queryConfig.queryString}`;
    keys = [...keys, opts.config.queryConfig.queryString];
  }
  if (opts.config?.queryConfig?.queryKey) {
    keys = [...keys, opts.config?.queryConfig?.queryKey];
  }

  if (opts.config?.httpConfig?.axiosConfig?.hasAuth) {
    hasAuthentication = opts.config?.httpConfig?.axiosConfig?.hasAuth;
  }
  let axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${'token'}`,
      ...opts.config?.httpConfig?.axiosConfig?.headers,
    },
    ...opts.config?.httpConfig?.axiosConfig,
  };
  if (!hasAuthentication) {
    axiosConfig = {
      ...opts.config?.httpConfig?.axiosConfig,
    };
  }

  return {
    url,
    keys,
    axiosConfig,
  };
};
