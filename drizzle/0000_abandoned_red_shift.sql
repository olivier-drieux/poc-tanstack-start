CREATE TABLE `account` (
	`id` varchar(255) NOT NULL,
	`accountId` varchar(255) NOT NULL,
	`providerId` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`accessToken` varchar(255),
	`refreshToken` varchar(255),
	`idToken` varchar(255),
	`expiresAt` timestamp,
	`password` varchar(255),
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` varchar(255) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	`ipAddress` varchar(255),
	`userAgent` varchar(255),
	`userId` varchar(255) NOT NULL,
	CONSTRAINT `session_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`emailVerified` boolean NOT NULL,
	`image` varchar(255),
	`createdAt` timestamp NOT NULL,
	`updatedAt` timestamp NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verification` (
	`id` varchar(255) NOT NULL,
	`identifier` varchar(255) NOT NULL,
	`value` varchar(255) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	CONSTRAINT `verification_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `account` ADD CONSTRAINT `account_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;