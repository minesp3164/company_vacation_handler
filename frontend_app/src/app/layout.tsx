import './globals.css'
import React, { PropsWithChildren } from 'react';
import appFont from '@/utils/appFont';
import MobileLayout from '@/layouts/MobileLayout';
import ConfigProvider from '@/utils/ConfigProvider';



export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={appFont.className}>
        <ConfigProvider>
          <MobileLayout>
            {children}
          </MobileLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
