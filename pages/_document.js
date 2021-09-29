import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html data-theme="garden" lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta name="theme-color" content="#E9E7E7" />

          <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
