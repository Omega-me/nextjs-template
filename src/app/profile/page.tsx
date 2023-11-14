import { prefetchQuery } from './utils';
import { ProfileModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const ProfilePage = async () => {
  const queryClient = await prefetchQuery();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileModule />
    </HydrationBoundary>
  );
};

export default ProfilePage;
