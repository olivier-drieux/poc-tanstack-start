import { mysqlTable, text, timestamp, boolean, varchar } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
    id: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    emailVerified: boolean().notNull(),
    image: varchar({ length: 255 }),
    createdAt: timestamp().notNull(),
    updatedAt: timestamp().notNull(),
});

export const session = mysqlTable('session', {
    id: varchar({ length: 255 }).primaryKey(),
    expiresAt: timestamp().notNull(),
    ipAddress: varchar({ length: 255 }),
    userAgent: varchar({ length: 255 }),
    userId: varchar({ length: 255 })
        .notNull()
        .references(() => user.id),
});

export const account = mysqlTable('account', {
    id: varchar({ length: 255 }).primaryKey(),
    accountId: varchar({ length: 255 }).notNull(),
    providerId: varchar({ length: 255 }).notNull(),
    userId: varchar({ length: 255 })
        .notNull()
        .references(() => user.id),
    accessToken: varchar({ length: 255 }),
    refreshToken: varchar({ length: 255 }),
    idToken: varchar({ length: 255 }),
    expiresAt: timestamp(),
    password: varchar({ length: 255 }),
});

export const verification = mysqlTable('verification', {
    id: varchar({ length: 255 }).primaryKey(),
    identifier: varchar({ length: 255 }).notNull(),
    value: varchar({ length: 255 }).notNull(),
    expiresAt: timestamp().notNull(),
});
