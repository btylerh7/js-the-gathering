import { defineConfig } from 'drizzle-kit';
import env from '../utils/env';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/',
});
