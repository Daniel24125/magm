import { Html, Head, Main, NextScript } from "next/document";
import { UserProvider } from '@auth0/nextjs-auth0/client';
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <UserProvider>
        <body>
          <Main />
          <NextScript />
        </body>
      </UserProvider>
    </Html>
  );
}
