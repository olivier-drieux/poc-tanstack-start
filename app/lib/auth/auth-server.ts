import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import { user } from '@/db/schema/auth-schema';
import * as schema from '@/db/schema/auth-schema';

export const authServer = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'mysql',
        schema,
    }),
    emailAndPassword: {
        enabled: true,
    },
});
