import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  static getLangDirs() {
    const fs = require('fs');
    const path = require('path');

    const langDirectory = path.join(process.cwd(), 'i18n');
    const filenames = fs.readdirSync(langDirectory);

    const localeDirs = {};
    filenames.forEach(async filename => {
      const { table = {} } = await import(`../../i18n/${filename}/`);
      localeDirs[filename] = table?.dir;
    });

    return localeDirs;
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const localeDirs = this.getLangDirs();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        localeDirs,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html dir={this.props.localeDirs[this.props.locale]}>
        <Head/>

        <body>
        <Main/>

        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;