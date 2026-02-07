import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native-web'
import { flush } from '@gluestack-style/react'

function Document() {
  return (
    <Html className="gs" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <style jsx global>{`
          * {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
        `}</style>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async ({ renderPage }) => {
  AppRegistry.registerComponent('Main', () => Main)
  const { getStyleElement } = AppRegistry.getApplication('Main')
  const page = await renderPage()
  const styles = [getStyleElement(), ...flush()]
  return { ...page, styles: React.Children.toArray(styles) }
}

export default Document
