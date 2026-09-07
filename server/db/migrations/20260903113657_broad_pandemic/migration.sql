ALTER TABLE `account` ADD `createdAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `account` ADD `updatedAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `session` ADD `createdAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `session` ADD `updatedAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `createdAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `updatedAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `verification` ADD `createdAt` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `verification` ADD `updatedAt` integer NOT NULL;