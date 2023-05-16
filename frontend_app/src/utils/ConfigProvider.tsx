'use client';

import { PropsWithChildren, ReactElement, useState } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function ConfigProvider({ children }: PropsWithChildren): ReactElement {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <AntdConfigProvider
        theme={{
          token: {
            colorPrimary: '#00B4D8',
          }
        }}
      >
        { children }
      </AntdConfigProvider>
    </QueryClientProvider>
  );
}
