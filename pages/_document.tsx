import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ReactElement } from "react";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return (
      <Html lang="zh-Hant-TW">
        <Head>
          <title>NICONITE 心理廁驗</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#FF733A" />
          <meta property="og:title" content="NICONITE 心理廁驗" />
          <meta property="og:site_name" content="NICONITE 心理廁驗" />
          <meta
            property="og:url"
            content="https://niconite-frontend.vercel.app/"
          />
          <meta property="og:description" content="" />
          <meta property="og:type" content="" />
          <meta
            property="og:image"
            content="https://niconite-frontend.vercel.app/profile.jpg"
          />
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMJQMLH');`}</script>
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6HD3F19P07"
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6HD3F19P07');`}
          </script>
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>{`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMJQMLH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}</noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
