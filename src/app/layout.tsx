import type { Metadata } from "next";
import "./global.css"
import RootTemplate from "./components/RootTemplate";


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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <RootTemplate >
          {children}
        </RootTemplate>
      </body>
    </html>
  );
}
