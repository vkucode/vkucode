import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>VKU CODE</title>
        <meta name="description" content="" />
        <meta name="theme-color" content="#0a0a0f" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
