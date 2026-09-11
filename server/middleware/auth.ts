export default defineEventHandler(async (event) => {
    const session = await auth.api.getSession({ headers: event.headers });
    if (event.path.startsWith('/decks')) {
        if (!session) {
            await sendRedirect(event, '/', 302);
        }
    }
});
