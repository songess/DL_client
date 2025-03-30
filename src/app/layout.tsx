import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${pretendard.className}`}>
        {children}
      </body>
    </html>
  );
}
