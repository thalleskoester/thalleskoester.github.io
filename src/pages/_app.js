import {I18nProvider} from 'next-rosetta';
import {DefaultSeo, SocialProfileJsonLd} from 'next-seo';

function MyApp({ Component, pageProps }) {

  const langAlternates = () => {
    const locales = pageProps.locales.map((locale) => {
      return { hrefLang: locale, href: `https://thalleskoester.com.br/${locale}/` };
    });

    return [
      { hrefLang: 'x-default', href: 'https://thalleskoester.com.br/' },
      ...locales
    ];
  };

  const ogLangAlternates = () =>
    pageProps.locales.map((locale) => {
      return { property: 'og:locale:alternate', content: locale };
    });

  return (
    <>
      <DefaultSeo
        titleTemplate='%s | Thalles Koester'
        description="This example uses more of the available config options."
        canonical="https://www.thalleskoester.com.br/"
        languageAlternates={langAlternates()}
        openGraph={{
          type: 'website',
          locale: pageProps.locale,
          url: 'https://www.thalleskoester.com.br/',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 1200,
              height: 630,
              alt: 'Banner do portifolio do Thalles Koester',
            }
          ],
          site_name: 'Thalles Koester',
        }}
        facebook={{
          appId: '210772297328024',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          ...ogLangAlternates()
        ]}
      />

      <SocialProfileJsonLd
        type="Person"
        name="Thalles Koester"
        url="https://www.thalleskoester.com.br/"
        sameAs={[
          'https://github.com/thalleskoester',
          'https://www.linkedin.com/in/thalleskoester/',
        ]}
      />

      <I18nProvider table={pageProps.table}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;