import { IPageProps } from '@/common/interfaces';

export interface TestParamsPageProps extends IPageProps {
  params: { testparams: string[] };
}
