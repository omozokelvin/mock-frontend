'use client';

import Providers from '@/lib/components/Providers';
import { ReactNode } from 'react';
import '@/app/globals.css';
import { siteConfig } from '@/lib/constants/config';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={siteConfig()?.applicationName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={siteConfig()?.applicationName}
        />
        <meta name="description" content={siteConfig()?.description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content={'#8326d0'} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={'#8326d0'} />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={siteConfig()?.domain} />
        <meta name="twitter:title" content={siteConfig()?.applicationName} />
        <meta name="twitter:description" content={siteConfig()?.description} />
        <meta name="twitter:image" content="icons/icon_x192.png" />
        <meta name="twitter:creator" content={siteConfig()?.twitter} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig()?.applicationName} />
        <meta property="og:description" content={siteConfig()?.description} />
        <meta property="og:site_name" content={siteConfig()?.applicationName} />
        <meta property="og:url" content={siteConfig()?.domain} />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
