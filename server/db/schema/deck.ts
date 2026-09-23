import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { user } from './auth';
import { createInsertSchema } from 'drizzle-orm/zod';
import { number } from 'zod';

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
    format: text().notNull().$type<Format>(),
    commanderBracket: int().$type<1 | 2 | 3 | 4 | 5>(),
    userId: int()
        .notNull()
        .references(() => user.id),
    ...timestamps,
});

export const InsertDeck = createInsertSchema(deck, {
    description: (field) => field.max(1000),
    format: (field) =>
        field.refine((input) =>
            FormatList.some((format) => format.value == input)
        ),
    // commanderBracket: (field) => f
}).omit({
    id: true,
    updatedAt: true,
    createdAt: true,
});
