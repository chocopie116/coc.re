import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface Props {}

class AppDocument extends Document<Props> {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/static/favicon.ico' />
          <meta charSet={'utf-8'} />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name={'description'}
            content={
              'Work as Play ~ All work and no play makes Jack a dull boy ~'
            }
          />
          <meta name={'author'} content={'Tsubasa KAJINUMA'} />

          <meta property={'og:title'} content={'homo ludens'} />
          <meta property={'og:type'} content={'website'} />
          <meta
            property={'og:image'}
            content={'https://chocopie116.me/img/banner.jpg'}
          />

          <link rel='stylesheet' href='/css/main.css' />
          <link rel='stylesheet' href='/css/style.css' />
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
