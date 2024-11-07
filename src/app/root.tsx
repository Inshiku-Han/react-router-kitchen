import type { PropsWithChildren } from 'react';
import type { LinksFunction } from 'react-router';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import '~/styles/globals.css';

export const links: LinksFunction = () => [
  {
    as: 'style',
    crossOrigin: 'anonymous',
    href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css',
    rel: 'stylesheet',
  },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
