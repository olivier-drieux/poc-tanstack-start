// app/routes/__root.tsx
import '@/global.css';
import globalStylesheet from '@/global.css?url';
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';

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
        <Html>
            <Head>
                <Meta />
            </Head>
            <Body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </Body>
        </Html>
    );
}
