DROP INDEX IF EXISTS `account_issuer_accountId_uidx`;--> statement-breakpoint
DROP INDEX IF EXISTS `account_userId_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `session_userId_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `verification_identifier_idx`;--> statement-breakpoint
DROP TABLE `account`;--> statement-breakpoint
DROP TABLE `session`;--> statement-breakpoint
DROP TABLE `user`;--> statement-breakpoint
DROP TABLE `verification`;