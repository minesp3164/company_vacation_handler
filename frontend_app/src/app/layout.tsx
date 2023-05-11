import './globals.css'
import React from 'react';
import appFont from '@/utils/app-font';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={appFont.className}>{children}</body>
    </html>
  );
}
