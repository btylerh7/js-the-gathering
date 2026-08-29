import { z, ZodError } from 'zod';

const EnvSchema = z.object({
    NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default function tryParseEnv() {
    try {
        EnvSchema.parse(process.env);
    } catch (err) {
        if (err instanceof ZodError) {
            const issues = err.issues.map((iss) => {
                return iss.path;
            });
            const message = `missing values in .env file: ${issues.join(', ')}`;
            const newError = new Error(message);
            newError.stack = '';
            throw newError;
        }

        throw err;
    }
}
