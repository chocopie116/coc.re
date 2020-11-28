import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

interface Props {}

class AppDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="generator" content="WordPress 5.5.3" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>WAI</title>
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

          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata"
            rel="stylesheet"
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

          <script
            type="text/javascript"
            src="https://dessign.net/screentheme/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp"
            id="jquery-core-js"
          ></script>
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
        <body className="archive category category-uiux category-6">
          {/* Mainの後にするとデザインくずれる */}
          {/* Mainの後にするとデザインくずれる */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
