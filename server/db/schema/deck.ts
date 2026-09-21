import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { user } from './auth';
import { createInsertSchema } from 'drizzle-orm/zod';

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
}).omit({
    id: true,
    updatedAt: true,
    createdAt: true,
});
