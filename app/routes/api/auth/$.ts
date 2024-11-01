// app/routes/api/auth/$.ts
import { authServer } from '@/lib/auth/auth-server';
import { createAPIFileRoute } from '@tanstack/start/api';

export const Route = createAPIFileRoute('/api/auth/$')({
    GET: ({ request }) => {
        return authServer.handler(request);
    },
    POST: ({ request }) => {
        return authServer.handler(request);
    },
});
