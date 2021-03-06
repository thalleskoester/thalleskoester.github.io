import Head from 'next/head';

import Layout from '../components/website/Layout';
import NotFound from '../components/website/NotFound';

function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 | Thalles Koester</title>
        <meta name="robots" content="noindex"/>
      </Head>

      <NotFound/>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { defaultLocale, locales } = context;
  const locale = context.locale || defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  return { props: { table, locale, locales }, revalidate: 60 * 60 * 60 * 24 };
}

export default Custom404;