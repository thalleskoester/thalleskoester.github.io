import Head from 'next/head';
import {useI18n} from 'next-rosetta';

import Layout from '../components/website/Layout';
import Presentation from '../components/website/Presentation';

function Index() {
  const { t } = useI18n();

  return (
    <Layout>
      <Head>
        <title>{t('common.site.title', { page: t('menu.pages.home') })}</title>
      </Head>

      <Presentation/>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  return { props: { table }, revalidate: 60 * 60 * 60 * 24 };
}

export default Index;