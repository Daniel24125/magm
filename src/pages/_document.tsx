import { Html, Head, Main, NextScript } from "next/document";
import { UserProvider } from '@auth0/nextjs-auth0/client';
 
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>MAGM</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <UserProvider>
        <body>
          <Main />
          <NextScript />
        </body>
      </UserProvider>
    </Html>
  );
}
