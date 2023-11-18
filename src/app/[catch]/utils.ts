import { IPageProps } from '@/common/interfaces';

export interface PageProps extends IPageProps {
  params: { catch: string[] | string };
}
