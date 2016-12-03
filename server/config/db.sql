-- how to run this file
-- use the following command with your computer's absolute path (my filename was db.sql)
-- mysql -u root -p < C:\Users\Khoa\Documents\HRLA11\Projects\Practice\sean_pract\server\config\db.sql

DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;

USE test;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Requests'
-- 
-- ---

DROP TABLE IF EXISTS `Requests`;
		
CREATE TABLE `Requests` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `id_Category` INTEGER NULL DEFAULT NULL,
  `id_User` INTEGER NULL DEFAULT NULL,
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Category'
-- 
-- ---

DROP TABLE IF EXISTS `Category`;
		
CREATE TABLE `Category` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Lesson'
-- 
-- ---

DROP TABLE IF EXISTS `Lesson`;
		
CREATE TABLE `Lesson` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_User` INTEGER NOT NULL,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `details` MEDIUMTEXT NULL DEFAULT NULL,
  `id_Category` INTEGER NULL DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rating'
-- 
-- ---

DROP TABLE IF EXISTS `Rating`;
		
CREATE TABLE `Rating` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_Lesson` INTEGER NOT NULL,
  `id_User` INTEGER NOT NULL,
  `rating` DECIMAL NULL DEFAULT NULL,
  `review` MEDIUMTEXT NULL DEFAULT NULL,
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Booking'
-- 
-- ---

DROP TABLE IF EXISTS `Booking`;
		
CREATE TABLE `Booking` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_Lesson` INTEGER NULL DEFAULT NULL,
  `id_User` INTEGER NULL DEFAULT NULL,
  `accept` bit NULL DEFAULT NULL,
  `details` MEDIUMTEXT NULL DEFAULT NULL,
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
		
CREATE TABLE `User` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `teachFlag` bit NULL DEFAULT 0,
  `rating` DECIMAL NULL DEFAULT NULL COMMENT 'ONLY if teachFlag = true',
  `bio` MEDIUMTEXT NULL DEFAULT NULL,
  `picture` MEDIUMTEXT NULL DEFAULT NULL,
  `auth` MEDIUMTEXT NULL DEFAULT NULL,
  `Spare1` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'UserCat'
-- THIS IS A JOIN TABLE, and we should only add User if the User.teachFlag == true
-- ---

DROP TABLE IF EXISTS `UserCat`;
		
CREATE TABLE `UserCat` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_Category` INTEGER NOT NULL,
  `id_User` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'THIS IS A JOIN TABLE, and we should only add User if the Use';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Requests` ADD FOREIGN KEY (id_Category) REFERENCES `Category` (`id`);
ALTER TABLE `Requests` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Lesson` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Lesson` ADD FOREIGN KEY (id_Category) REFERENCES `Category` (`id`);
ALTER TABLE `Rating` ADD FOREIGN KEY (id_Lesson) REFERENCES `Lesson` (`id`);
ALTER TABLE `Rating` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Booking` ADD FOREIGN KEY (id_Lesson) REFERENCES `Lesson` (`id`);
ALTER TABLE `Booking` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `UserCat` ADD FOREIGN KEY (id_Category) REFERENCES `Category` (`id`);
ALTER TABLE `UserCat` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Requests` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Category` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Lesson` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rating` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Booking` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `UserCat` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Requests` (`id`,`name`,`id_Category`,`id_User`,`Spare1`) VALUES
-- ('','','','','');
-- INSERT INTO `Category` (`id`,`name`,`Spare1`) VALUES
-- ('','','');
-- INSERT INTO `Lesson` (`id`,`id_User`,`name`,`details`,`id_Category`,`rating`,`Spare1`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Rating` (`id`,`id_Lesson`,`id_User`,`rating`,`review`,`Spare1`) VALUES
-- ('','','','','','');
-- INSERT INTO `Booking` (`id`,`id_Lesson`,`id_User`,`accept`,`details`,`Spare1`) VALUES
-- ('','','','','','');
-- INSERT INTO `User` (`id`,`name`,`teachFlag`,`rating`,`bio`,`picture`,`auth`,`Spare1`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `UserCat` (`id`,`id_Category`,`id_User`) VALUES
-- ('','','');