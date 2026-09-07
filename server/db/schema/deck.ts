import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { user } from './auth';

const timestamps = {
    createdAt: int()
        .notNull()
        .$default(() => Date.now()),
    updatedAt: int()
        .notNull()
        .$default(() => Date.now())
        .$onUpdate(() => Date.now()),
};

export const deck = sqliteTable('deck', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
    userId: int()
        .notNull()
        .references(() => user.id),
    ...timestamps,
});
