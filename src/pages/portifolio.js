import {useI18n} from 'next-rosetta';
import {NextSeo} from 'next-seo';

import Layout from '../components/website/Layout';
import Portfolio from '../components/website/Portfolio';

const Portifolio = ({ jobs }) => {
  const { t } = useI18n();

  return (
    <>
      <NextSeo
        title={t('menu.pages.portfolio')}
        openGraph={{
          title: t('common.site.title', { page: t('menu.pages.portfolio') }),
        }}
      />

      <Layout>
        <Portfolio jobs={jobs}/>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  const { defaultLocale, locales } = context;
  const locale = context.locale || defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  const path = require('path');
  const fs = require('fs');

  const dataDirectory = path.join(process.cwd(), 'data');
  const portfolioFile = path.join(dataDirectory, 'portfolio.json');
  const fileContent = fs.readFileSync(portfolioFile, 'utf8');

  const { jobs } = JSON.parse(fileContent);

  return { props: { table, jobs, locale, locales }, revalidate: 60 * 60 * 60 * 24 };
}

export default Portifolio;