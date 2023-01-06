import { ComponentType, ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';

import { DehydratedState } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { ...restPageProps } = pageProps;

  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...restPageProps} />)}</>;
};

export default appWithTranslation(MyApp as ComponentType<any>);
