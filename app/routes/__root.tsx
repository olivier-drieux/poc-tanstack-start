// app/routes/__root.tsx
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';
import type { ReactNode } from 'react';
import globalStylesheet from '@/global.css?url';
import '@/global.css';

export const Route = createRootRoute({
    meta: () => [
        {
            charSet: 'utf-8',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            title: 'TanStack Start Starter',
        },
    ],
    links: () => [
        {
            rel: 'stylesheet',
            href: globalStylesheet,
        },
    ],
    component: RootComponent,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Html>
            <Head>
                <Meta />
            </Head>
            <Body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </Body>
        </Html>
    );
}
