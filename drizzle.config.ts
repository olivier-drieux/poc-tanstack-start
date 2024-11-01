import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
}

export default defineConfig({
    schema: './app/db/schema/*',
    out: './drizzle',
    dialect: 'mysql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
