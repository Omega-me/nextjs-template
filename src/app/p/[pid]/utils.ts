import { IPageProps } from '@/common/interfaces';

export interface PageProps extends IPageProps {
  params: { pid: string };
}
