// app/router.tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query';
import { DefaultCatchBoundary } from './components/default-catch--boundary';
import { NotFound } from './components/not-found';
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

export function createRouter() {
    const queryClient = new QueryClient()

    return routerWithQueryClient(
        createTanStackRouter({
            routeTree,
            context: { queryClient },
            defaultPreload: 'intent',
            defaultErrorComponent: DefaultCatchBoundary,
            defaultNotFoundComponent: () => <NotFound />,
        }),
        queryClient,
    )
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
