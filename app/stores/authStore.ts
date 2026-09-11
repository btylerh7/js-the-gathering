import { createAuthClient } from 'better-auth/vue';

const authClient = createAuthClient();

export const useAuthStore = defineStore('authStore', () => {
    const session = authClient.useSession();
    const user = computed(() => session.value?.data?.user);
    async function signIn(email: string, password: string) {
        await authClient.signIn.email(
            {
                email: email,
                password: password,
            },
            {
                onSuccess: (_ctx) => {
                    navigateTo('/');
                },
                onError: (ctx) => {
                    navigateTo(`/error?error=${encodeURI(ctx.error.message)}`);
                },
            }
        );
    }
    async function signUp(name: string, email: string, password: string) {
        await authClient.signUp.email(
            {
                email: email,
                password: password,
                name: name,
            },
            {
                onError: (ctx) => {
                    navigateTo(`/error?error=${encodeURI(ctx.error.message)}`);
                },
                onSuccess: (_ctx) => {
                    navigateTo('/');
                },
            }
        );
    }
    async function signOut() {
        await authClient.signOut();
    }
    return { signUp, signIn, user, signOut };
});
