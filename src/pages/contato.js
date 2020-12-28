import Head from 'next/head';

import Layout from '../components/website/Layout';
import Contact from '../components/website/Contact';

function Contato() {
  return (
    <Layout>
      <Head>
        <title>Contato | Thalles Koester</title>
      </Head>

      <Contact/>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  return { props: { table }, revalidate: 60 * 60 * 60 * 24 };
}

export default Contato;