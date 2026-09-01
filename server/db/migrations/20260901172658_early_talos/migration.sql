CREATE TABLE `deck` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`description` text,
	`createdAt` integer NOT NULL,
	`updatedAtAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `card` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`deckId` integer NOT NULL,
	`scryfallId` text,
	`color` text NOT NULL,
	`imageUri` text,
	`name` text NOT NULL,
	`description` text,
	`createdAt` integer NOT NULL,
	`updatedAtAt` integer NOT NULL,
	CONSTRAINT `fk_card_deckId_deck_id_fk` FOREIGN KEY (`deckId`) REFERENCES `deck`(`id`)
);
