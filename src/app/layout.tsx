import type { Metadata } from "next";
import "./globals.css";
import ReactQueryClientProvider from "@/app/providers/QueryClientProvider";


export const metadata: Metadata = {
  title: "TCGrinder",
  description: "Name WIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
