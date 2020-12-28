import Head from 'next/head';
import {useI18n} from 'next-rosetta';

import Layout from '../components/website/Layout';
import AboutMe from '../components/website/AboutMe';
import Skills from '../components/website/Skills';

const Sobre = ({ skills }) => {
  const { t } = useI18n();

  return (
    <Layout>
      <Head>
        <title>{t('common.site.title', { page: t('menu.pages.about') })}</title>
      </Head>

      <AboutMe/>
      <Skills skills={skills}/>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}/`);

  const path = require('path');
  const fs = require('fs');

  const dataDirectory = path.join(process.cwd(), 'data');
  const skillsFile = path.join(dataDirectory, 'skills.json');
  const fileContent = fs.readFileSync(skillsFile, 'utf8');

  const { skills } = JSON.parse(fileContent);

  skills.forEach(skill => {
    skill.level = new Array(5)
      .fill(true, 0, skill.level)
      .fill(false, skill.level);
  });

  return { props: { table, skills }, revalidate: 60 * 60 * 60 * 24 };
}

export default Sobre;