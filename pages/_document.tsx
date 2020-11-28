import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

interface Props {}

class AppDocument extends Document<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet={"utf-8"} />
          <title>UI/UX &laquo; Screen UI/UX WordPress Theme</title>
          <link rel="dns-prefetch" href="//s.w.org" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Screen UI/UX WordPress Theme &raquo; UI/UX Category Feed"
            href="https://dessign.net/screentheme/category/uiux/feed/"
          />
          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="https://dessign.net/screentheme/wp-includes/css/dist/block-library/style.min.css?ver=5.5.3"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="cyclone-template-style-dark-0-css"
            href="https://dessign.net/screentheme/wp-content/plugins/cyclone-slider-2/templates/dark/style.css?ver=2.12.4"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="cyclone-template-style-default-0-css"
            href="https://dessign.net/screentheme/wp-content/plugins/cyclone-slider-2/templates/default/style.css?ver=2.12.4"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="cyclone-template-style-standard-0-css"
            href="https://dessign.net/screentheme/wp-content/plugins/cyclone-slider-2/templates/standard/style.css?ver=2.12.4"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="cyclone-template-style-thumbnails-0-css"
            href="https://dessign.net/screentheme/wp-content/plugins/cyclone-slider-2/templates/thumbnails/style.css?ver=2.12.4"
            type="text/css"
            media="all"
          />
          <script
            type="text/javascript"
            src="https://dessign.net/screentheme/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp"
            id="jquery-core-js"
          ></script>
          <link
            rel="https://api.w.org/"
            href="https://dessign.net/screentheme/wp-json/"
          />
          <link
            rel="alternate"
            type="application/json"
            href="https://dessign.net/screentheme/wp-json/wp/v2/categories/6"
          />
          <link
            rel="EditURI"
            type="application/rsd+xml"
            title="RSD"
            href="https://dessign.net/screentheme/xmlrpc.php?rsd"
          />
          <link
            rel="wlwmanifest"
            type="application/wlwmanifest+xml"
            href="https://dessign.net/screentheme/wp-includes/wlwmanifest.xml"
          />
          <meta name="generator" content="WordPress 5.5.3" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/style.css"
            type="text/css"
            media="screen"
            title="no title"
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/css/mobile.css"
            type="text/css"
            media="screen"
            title="no title"
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/css/slicknav.css"
          />
          <link
            href="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/css/flickerplate.css"
            type="text/css"
            rel="stylesheet"
          />
          <script src="https://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/jquery.infinitescroll.js"></script>
          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/jquery.slicknav.js"></script>
          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/retina-1.1.0.min.js"></script>
          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/jquery.grid-a-licious.js"></script>
          <script
            src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/modernizr-custom-v2.7.1.min.js"
            type="text/javascript"
          ></script>
          <script
            src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/jquery-finger-v0.1.0.min.js"
            type="text/javascript"
          ></script>
          <script
            src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/flickerplate.min.js"
            type="text/javascript"
          ></script>

          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/jquery.carouFredSel-6.2.1.js"></script>

          <script src="https://dessign.net/screentheme/wp-content/themes/PixelThemeResPremium/js/scripts.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
