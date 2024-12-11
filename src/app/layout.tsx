import type { Metadata } from "next";
import Nav from "./components/Nav";
import { UserProvider } from '@auth0/nextjs-auth0/client';


export const metadata: Metadata = {
  title: "MAGM",
  description: "A web application to monitor micro algae growth",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Nav/>
          {children}
        </body>
      </UserProvider>

    </html>
  );
}
