import { int, text, camelCase } from 'drizzle-orm/sqlite-core';

export const deck = camelCase.table('deck', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
    createdAt: int()
        .notNull()
        .$default(() => Date.now()),
    updatedAtAt: int()
        .notNull()
        .$default(() => Date.now())
        .$onUpdate(() => Date.now()),
});
