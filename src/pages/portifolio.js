import Head from 'next/head';

import Layout from '../components/website/Layout';
import Portfolio from '../components/website/Portfolio';

const Portifolio = ({ jobs }) => {
  return (
    <Layout>
      <Head>
        <title>Portifólio | Thalles Koester</title>
      </Head>

      <Portfolio jobs={jobs}/>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  const path = require('path');
  const fs = require('fs');

  const dataDirectory = path.join(process.cwd(), 'data');
  const portfolioFile = path.join(dataDirectory, 'portfolio.json');
  const fileContent = fs.readFileSync(portfolioFile, 'utf8');

  const { jobs } = JSON.parse(fileContent);

  return { props: { table, jobs }, revalidate: 60 * 60 * 60 * 24 };
}

export default Portifolio;