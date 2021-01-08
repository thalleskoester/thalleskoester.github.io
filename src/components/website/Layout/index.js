import Reset from '../../../styles/reset';
import Head from 'next/head';
import {useI18n} from 'next-rosetta';

import MenuProvider from '../../../contexts/MenuContext';
import Header from '../Header/';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { t } = useI18n();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap"
          rel="stylesheet"/>

        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/pwa/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/pwa/favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/pwa/apple-touch-icon.png"/>
        <link rel="mask-icon" href="/static/pwa/safari-pinned-tab.svg" color="#303841"/>
        <link rel="manifest" href={`/static/pwa/${t('code')}.site.webmanifest`}/>
        <meta name="msapplication-config" content="/static/pwa/browserconfig.xml"/>
        <meta name="msapplication-TileColor" content="#303841"/>
        <meta name="theme-color" content="#303841"/>
      </Head>

      <Reset/>

      <MenuProvider>
        <Header/>
        {children}
        <Footer/>
      </MenuProvider>
    </>
  );
};

export default Layout;