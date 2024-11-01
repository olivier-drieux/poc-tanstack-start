import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';

export const authServer = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'mysql',
    }),
    emailAndPassword: {
        enabled: true,
    },
});
