import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import QueryProvider from './QueryProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-TodoList',
  description: 'Generated by create next app',
  icons: {
    icon: 'public/catTheKing.ico',
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
