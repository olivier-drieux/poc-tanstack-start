// app/routes/__root.tsx
import '@/global.css';
import globalStylesheet from '@/global.css?url';
import { Link, Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { DefaultCatchBoundary } from '@/components/default-catch--boundary';
import { NotFound } from '@/components/not-found';
import type { QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

export const Route = createRootRoute<{ queryClient: QueryClient }>({
    head: () => ({
        meta: [
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
        links: [
            {
                rel: 'stylesheet',
                href: globalStylesheet,
            },
        ],
    }),
    component: RootComponent,
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFound />,
    pendingComponent: PendingComponent,
});
function PendingComponent() {
    return (
        <div className='space-y-6 p-6'>
            <h1>
                Loading...
            </h1>
        </div>
    )
}
function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <Meta />
            </head>
            <body>
                <div className="p-2 flex gap-2 text-lg">
                    <Link
                        to="/"
                        activeProps={{
                            className: 'font-bold',
                        }}
                        activeOptions={{ exact: true }}
                    >
                        Home
                    </Link>{' '}
                    <Link
                        to="/users"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        Users
                    </Link>{' '}
                    <Link
                        to="/auth/sign-in"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        SignIn
                    </Link>{' '}
                    <Link
                        to="/auth/sign-up"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        SignUp
                    </Link>{' '}
                    <Link
                        // @ts-expect-error
                        to="/this-route-does-not-exist"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        This Route Does Not Exist
                    </Link>
                </div>
                <hr />
                {children}
                <Toaster />
                <ScrollRestoration />
                <TanStackRouterDevtools position="bottom-right" />
                <ReactQueryDevtools buttonPosition="bottom-left" />
                <Scripts />
            </body>
        </html>
    )
}