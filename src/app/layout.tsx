import type { Metadata } from "next";


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
      <body>
        {children}
      </body>
    </html>
  );
}
