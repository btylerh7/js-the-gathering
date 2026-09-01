import { relations } from 'drizzle-orm/_relations';
import {
    sqliteTable,
    text,
    integer,
    index,
    uniqueIndex,
} from 'drizzle-orm/sqlite-core';
import { timestamps } from './deck';

export const user = sqliteTable('user', {
    id: text().primaryKey(),
    name: text().notNull(),
    email: text().notNull().unique(),
    emailVerified: integer('email_verified', { mode: 'boolean' })
        .default(false)
        .notNull(),
    image: text(),
    ...timestamps,
});

export const session = sqliteTable(
    'session',
    {
        id: text().primaryKey(),
        expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
        token: text('token').notNull().unique(),
        ...timestamps,
        ipAddress: text(),
        userAgent: text(),
        userId: text()
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
    },
    (table) => [index('session_userId_idx').on(table.userId)]
);

export const account = sqliteTable(
    'account',
    {
        id: text().primaryKey(),
        issuer: text().notNull(),
        accountId: text().notNull(),
        providerId: text().notNull(),
        userId: text()
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        accessToken: text(),
        refreshToken: text(),
        idToken: text(),
        accessTokenExpiresAt: integer('access_token_expires_at', {
            mode: 'timestamp_ms',
        }),
        refreshTokenExpiresAt: integer('refresh_token_expires_at', {
            mode: 'timestamp_ms',
        }),
        scope: text(),
        password: text(),
        ...timestamps,
    },
    (table) => [
        uniqueIndex('account_issuer_accountId_uidx').on(
            table.issuer,
            table.accountId
        ),
        index('account_userId_idx').on(table.userId),
    ]
);

export const verification = sqliteTable(
    'verification',
    {
        id: text().primaryKey(),
        identifier: text().notNull(),
        value: text().notNull(),
        expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
        ...timestamps,
    },
    (table) => [index('verification_identifier_idx').on(table.identifier)]
);

export const userRelations = relations(user, ({ many }) => ({
    sessions: many(session),
    accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}));
