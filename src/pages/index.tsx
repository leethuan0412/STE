import { ReactElement } from 'react';

import { useRouter } from 'next/router';

import { MainLayout } from '@/components/layout';

const Home = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/login')}>
      go to login
    </button>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
