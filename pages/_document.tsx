import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Elvis Osano - Fullstack Developer in Kenya" />
          <meta property="og:description" content="I'm a Fullstack Developer based in Kenya with over 3 years of experience in web development." />
          <meta property="og:image" content="/images/client-bg.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Elvis Osano - Fullstack Developer in Kenya" />
          <meta name="twitter:description" content="I'm a Fullstack Developer based in Kenya with over 3 years of experience in web development." />
          <meta name="twitter:image" content="/images/client-bg.png" />
          <meta name="description" content="Elvis Osano is a full-stack programmer based in Kenya. With experience in web development, mobile app development, and more. Contact Elvis for your programming needs." />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://osano.com" />
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
