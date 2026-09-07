ALTER TABLE `account` RENAME COLUMN `accountId` TO `account_id`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `providerId` TO `provider_id`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `userId` TO `user_id`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `accessToken` TO `access_token`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `refreshToken` TO `refresh_token`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `idToken` TO `id_token`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `account` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `session` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `session` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `session` RENAME COLUMN `ipAddress` TO `ip_address`;--> statement-breakpoint
ALTER TABLE `session` RENAME COLUMN `userAgent` TO `user_agent`;--> statement-breakpoint
ALTER TABLE `session` RENAME COLUMN `userId` TO `user_id`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `verification` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `verification` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_account` (
	`id` text PRIMARY KEY,
	`issuer` text NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	CONSTRAINT `fk_account_userId_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
INSERT INTO `__new_account`(`id`, `issuer`, `account_id`, `provider_id`, `user_id`, `access_token`, `refresh_token`, `id_token`, `access_token_expires_at`, `refresh_token_expires_at`, `scope`, `password`, `created_at`, `updated_at`) SELECT `id`, `issuer`, `account_id`, `provider_id`, `user_id`, `access_token`, `refresh_token`, `id_token`, `access_token_expires_at`, `refresh_token_expires_at`, `scope`, `password`, `created_at`, `updated_at` FROM `account`;--> statement-breakpoint
DROP TABLE `account`;--> statement-breakpoint
ALTER TABLE `__new_account` RENAME TO `account`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_session` (
	`id` text PRIMARY KEY,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL UNIQUE,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` text NOT NULL,
	CONSTRAINT `fk_session_userId_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
INSERT INTO `__new_session`(`id`, `expires_at`, `token`, `created_at`, `updated_at`, `ip_address`, `user_agent`, `user_id`) SELECT `id`, `expires_at`, `token`, `created_at`, `updated_at`, `ip_address`, `user_agent`, `user_id` FROM `session`;--> statement-breakpoint
DROP TABLE `session`;--> statement-breakpoint
ALTER TABLE `__new_session` RENAME TO `session`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_user` (
	`id` text PRIMARY KEY,
	`name` text NOT NULL,
	`email` text NOT NULL UNIQUE,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_user`(`id`, `name`, `email`, `email_verified`, `image`, `created_at`, `updated_at`) SELECT `id`, `name`, `email`, `email_verified`, `image`, `created_at`, `updated_at` FROM `user`;--> statement-breakpoint
DROP TABLE `user`;--> statement-breakpoint
ALTER TABLE `__new_user` RENAME TO `user`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_verification` (
	`id` text PRIMARY KEY,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_verification`(`id`, `identifier`, `value`, `expires_at`, `created_at`, `updated_at`) SELECT `id`, `identifier`, `value`, `expires_at`, `created_at`, `updated_at` FROM `verification`;--> statement-breakpoint
DROP TABLE `verification`;--> statement-breakpoint
ALTER TABLE `__new_verification` RENAME TO `verification`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `account_issuer_accountId_uidx` ON `account` (`issuer`,`account_id`);--> statement-breakpoint
CREATE INDEX `account_userId_idx` ON `account` (`user_id`);--> statement-breakpoint
CREATE INDEX `session_userId_idx` ON `session` (`user_id`);--> statement-breakpoint
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);