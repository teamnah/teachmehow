-- how to run this file
-- use the following command with your computer's absolute path (my filename was db.sql)
-- mysql -u root -p < C:\Users\Khoa\Documents\HRLA11\Projects\teachmehow\server\config\dbDummyData.sql
-- this file will delete your old data and populate your already made tables


USE teachme;

DELETE FROM booking;
DELETE FROM category;
DELETE FROM rating;
DELETE FROM request;
DELETE FROM user;


INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`) VALUES('Khoa',0, NOW(), NOW());
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`) VALUES('Nate',0, NOW(), NOW());
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`) VALUES('Kevin',0, NOW(), NOW());
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`) VALUES('Daria',1, NOW(), NOW());
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`) VALUES('Ricky',1, NOW(), NOW());

INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('dance', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('driving', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('cooking', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('javascript', NOW(), NOW());

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Daria'),
    (select id from category where name='dance'),
    'How to Dougie',
    'lesson details go here',
    4.8,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Daria'),
    (select id from category where name='driving'),
    'How to drive stick',
    'lesson details go here',
    4.3,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Ricky'),
    (select id from category where name='driving'),
    'How to Drift',
    'lesson details go here',
    4.8,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Ricky'),
    (select id from category where name='driving'),
    'How to do donuts',
    'lesson details go here',
    4.5,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Ricky'),
    (select id from category where name='javascript'),
    'How to use webpack',
    'lesson details go here',
    4.9,
    NOW(),
    NOW()
);




-- INSERT INTO `Requests` (`id`,`name`,`CategoryId`,`UserId`,`Spare1`) VALUES
-- ('','','','','');
-- INSERT INTO `Category` (`id`,`name`,`Spare1`) VALUES('','','');
-- INSERT INTO `Lesson` (`id`,`UserId`,`name`,`details`,`CategoryId`,`rating`,`Spare1`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Rating` (`id`,`id_Lesson`,`UserId`,`rating`,`review`,`Spare1`) VALUES
-- ('','','','','','');
-- INSERT INTO `Booking` (`id`,`id_Lesson`,`UserId`,`accept`,`details`,`Spare1`) VALUES
-- ('','','','','','');
-- INSERT INTO `User` (`id`,`name`,`teachFlag`,`rating`,`bio`,`picture`,`auth`,`Spare1`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `UserCat` (`id`,`CategoryId`,`UserId`) VALUES
-- ('','','');