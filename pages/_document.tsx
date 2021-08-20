import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { GA_TRACKING_ID } from '../utils/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  public render() {
    return (
      <Html>
        <Head>{this.renderGA()}</Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  protected renderGA() {
    if (process.env.NODE_ENV !== 'production') return;
    return (
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        <script
          data-ad-client="ca-pub-2663996686771778"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </>
    );
  }
}

export default MyDocument;
