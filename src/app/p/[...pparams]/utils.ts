import { IPageProps } from '@/common/interfaces';

export interface PageProps extends IPageProps {
  params: { pparams: string[] };
}
