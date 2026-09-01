import { int, text, camelCase } from 'drizzle-orm/sqlite-core';
import { deck } from './deck';

const timestamps = {
    createdAt: int()
        .notNull()
        .$default(() => Date.now()),
    updatedAt: int()
        .notNull()
        .$default(() => Date.now())
        .$onUpdate(() => Date.now()),
};

export const card = camelCase.table('card', {
    id: int().primaryKey({ autoIncrement: true }),
    deckId: int()
        .notNull()
        .references(() => deck.id),
    scryfallId: text(),
    color: text().notNull().$type<'R' | 'W' | 'U' | 'B' | 'G'>(),
    imageUri: text(),
    name: text().notNull(),
    description: text(),
    ...timestamps,
});
