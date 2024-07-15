import RootTemplate from "@/components/design/RootTemplate";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  return <UserProvider>
    <RootTemplate>
      <Component {...pageProps} />
    </RootTemplate>
  </UserProvider>
}
