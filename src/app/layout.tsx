import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Dreaming Library',
  description: '서강대학교 도서 대여 시스템',
  icons: {
    icon: '/png/2025-03-30-21-20-53.png',
  },
  openGraph: {
    title: 'Dreaming Library',
    images: [
      {
        url: '/png/2025-03-30-21-20-53.png',
      },
    ],
    type: 'website',
  },
};

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
