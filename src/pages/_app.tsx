import RootTemplate from "@/components/template/RootTemplate";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import PageContext from "@/contexts/PageContext";

export default function App({ Component, pageProps }: AppProps) {
  
  return(
    <UserProvider>
      <ErrorBoundary FallbackComponent ={ErrorComponent}>
        <PageContext>
          <RootTemplate>
              <Component {...pageProps} />
          </RootTemplate>
        </PageContext>
      </ErrorBoundary>
    </UserProvider>
)
}
