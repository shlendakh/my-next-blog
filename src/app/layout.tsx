import { ReactNode } from 'react';
import Header from '@/components/Header';
import '@/styles/globals.css';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Blog</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}