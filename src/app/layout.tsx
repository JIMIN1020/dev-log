import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/common/Header';
import MainLayout from '@/components/common/MainLayout';
import Providers from '@/components/common/Providers';

const SpoqaHanSans = localFont({
  src: [
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spoqa',
});

export const metadata: Metadata = {
  title: "JM's Dev Log",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${SpoqaHanSans.variable} font-spoqa`}>
      <body>
        <Providers>
          <MainLayout>
            <Header />
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
