import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const decks = sqliteTable('decks', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
});
