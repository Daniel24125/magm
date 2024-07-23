import RootTemplate from "@/components/template/RootTemplate";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingContext from "@/contexts/LoadingContext";

export default function App({ Component, pageProps }: AppProps) {
  
  return(
    <LoadingContext>
      <UserProvider>
        <ErrorBoundary FallbackComponent ={ErrorComponent}>
          {/* @ts-ignore*/}
          <RootTemplate>
              <Component {...pageProps} />
          </RootTemplate>
        </ErrorBoundary>
      </UserProvider>
    </LoadingContext>
)
}
