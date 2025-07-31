import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'clinica.pk',
  description: 'Your trusted partner in health.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPoppins.variable} ${fontPtSans.variable} h-full`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col h-full">
        <Header />
        <main className="flex-grow bg-background">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
