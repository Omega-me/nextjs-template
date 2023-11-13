import { UseQueryOptions, UseMutationOptions, QueryKey } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { eHttpMethod } from 'common/enums';
import { useQuery } from '@tanstack/react-query';

// custom axios config interface
interface IAxiosConfig extends AxiosRequestConfig {
  hasAuth?: boolean;
}
// htpp config interface
export interface IHttpConfig<TData = unknown> {
  data?: TData;
  axiosConfig?: IAxiosConfig;
  message?: string;
}

// Axios response interface
export interface IResponse<TData = unknown> {
  data: TData | null;
  count?: number | null;
  status: string;
}

// Query interfaces
interface IQueryConfig extends Omit<UseQueryOptions<TData, any, any, any>, 'queryKey' | 'queryFn'> {
  queryKey?: QueryKey;
  queryParam?: string;
  queryString?: string;
  queryUrl?: string;
  showError?: boolean;
}
export interface IQueryOpts<TData = unknown> {
  httpConfig?: IHttpConfig<TData>;
  queryConfig?: IQueryConfig;
}

// Mutation interfaces
interface IMutationConfig extends Omit<UseMutationOptions<TData, any, any, any>, 'mutationFn'> {
  queryKey?: QueryKey;
  queryParam?: string;
  queryString?: string;
  queryUrl?: string;
  showError?: boolean;
  defaultInvalidation?: boolean;
}
export interface IMuattionOpts<TData = unknown> {
  httpConfig?: {
    methode?: eHttpMethod;
    httpOptions?: IHttpConfig<TData>;
  };
  queryConfig?: IMutationConfig;
}

// export interface IGlobalQueryConfig<TData = unknown> {
//   httpConfig?: IHttpConfig<TData>;
//   queryConfig: {
//     queryOptions?: Omit<UseQueryOptions<TData, any, any, any>, 'queryKey' | 'queryFn'>;
//     queryKey?: QueryKey;
//     queryUrl: string;
//   };
// }
// export interface IGlobalMutationConfig<TData = unknown> {
//   httpConfig?: {
//     methode?: eHttpMethod;
//     httpOptions?: IHttpConfig<TData>;
//   };
//   queryConfig: {
//     queryOptions?: Omit<UseMutationOptions<TData, any, any, any>, 'mutationFn'>;
//     queryKey?: QueryKey;
//     queryUrl: string;
//   };
// }
