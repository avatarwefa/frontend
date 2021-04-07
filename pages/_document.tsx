import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="vi">
        <Head />
        <body>
          <Main />
          <script async type="text/javascript" src="/js/script.js"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument