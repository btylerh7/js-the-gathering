import { ZodError, ZodObject, ZodRawShape } from 'zod';

export default function tryParseEnv<T extends ZodRawShape>(
    EnvSchema: ZodObject<T>,
    buildEnv: Record<string, string | undefined> = process.env
) {
    try {
        EnvSchema.parse(buildEnv);
    } catch (err) {
        if (err instanceof ZodError) {
            const issues = err.issues.map((iss) => {
                return iss.path;
            });
            const message = `missing values in .env file:\n${issues.join(', ')}`;
            const newError = new Error(message);
            newError.stack = '';
            throw newError;
        }

        throw err;
    }
}
