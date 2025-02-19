import Document, { Html, Head, Main, NextScript } from 'next/document';

// Custom Document component to modify the HTML structure of the application
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>{/* Sets the language attribute for the document */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
