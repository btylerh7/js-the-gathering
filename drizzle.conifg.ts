import { defineConfig } from 'drizzle-kit';
import env from './server/utils/env';

export default defineConfig({
    dialect: 'turso',
    schema: './server/db/schema/index.ts',
    out: './server/db/migrations',
    dbCredentials: {
        url: env.TURSO_DATABASE_URL,
        authToken: env.TURSO_AUTH_TOKEN,
    },
});
