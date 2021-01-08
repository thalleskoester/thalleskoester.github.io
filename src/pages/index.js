import {useI18n} from 'next-rosetta';
import {NextSeo} from 'next-seo';

import Layout from '../components/website/Layout';
import Presentation from '../components/website/Presentation';

function Index() {
  const { t } = useI18n();

  return (
    <>
      <NextSeo
        title={t('menu.pages.home')}
        openGraph={{
          title: t('common.site.title', { page: t('menu.pages.home') }),
        }}
      />

      <Layout>
        <Presentation/>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { defaultLocale, locales } = context;
  const locale = context.locale || defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  return { props: { table, locale, locales }, revalidate: 60 * 60 * 60 * 24 };
}

export default Index;