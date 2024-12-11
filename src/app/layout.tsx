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
      <head></head>
      <body>
        <nav className="w-screen bg-orange-400 h-20">
     
        </nav>

        {children}
      </body>
    </html>
  );
}
