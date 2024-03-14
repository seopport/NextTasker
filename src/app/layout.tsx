import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import QueryProvider from '../hooks/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-TodoList',
  description: 'Creating a To-Do list app with Next.js By Jiwon',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <QueryProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
