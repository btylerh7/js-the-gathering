import { drizzle } from 'drizzle-orm/libsql';
import { authRelations } from './schema';
import env from '../utils/env';

const db = drizzle({
    connection: {
        url: env.TURSO_DATABASE_URL,
        authToken:
            env.NODE_ENV == 'development' ? undefined : env.TURSO_AUTH_TOKEN,
    },
    relations: { ...authRelations },
});
export default db;
