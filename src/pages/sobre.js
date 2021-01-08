import {useI18n} from 'next-rosetta';
import {NextSeo} from 'next-seo';

import Layout from '../components/website/Layout';
import AboutMe from '../components/website/AboutMe';
import Skills from '../components/website/Skills';

const Sobre = ({ skills }) => {
  const { t } = useI18n();

  return (
    <>
      <NextSeo
        title={t('menu.pages.about')}
        openGraph={{
          title: t('common.site.title', { page: t('menu.pages.about') }),
        }}
      />

      <Layout>
        <AboutMe/>
        <Skills skills={skills}/>
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
  const skillsFile = path.join(dataDirectory, 'skills.json');
  const fileContent = fs.readFileSync(skillsFile, 'utf8');

  const { skills } = JSON.parse(fileContent);

  skills.forEach(skill => {
    skill.level = new Array(5)
      .fill(true, 0, skill.level)
      .fill(false, skill.level);
  });

  return { props: { table, skills, locale, locales }, revalidate: 60 * 60 * 60 * 24 };
}

export default Sobre;