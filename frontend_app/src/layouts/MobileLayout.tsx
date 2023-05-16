'use client';

import React from 'react';

type Children = { children: React.ReactNode };

export default function MobileLayout({ children }: Children) {
  return (
    <main
      className="w-[430px] max-w-[430px] px-5"
    >
      { children }
    </main>
  );
}
