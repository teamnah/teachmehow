-- how to run this file
-- use the following command with your computer's absolute path (my filename was db.sql)
-- this will populate dummy data in your SQL file
-- mysql -u root -p < C:\Users\Khoa\Documents\HRLA11\Projects\teachmehow\server\config\dbDummyData.sql
-- this file will delete your old data and populate your already made tables


USE practice;


DELETE FROM category;
DELETE FROM rating;
DELETE FROM request;
DELETE FROM user;


INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`) 
    VALUES('Khoa',0, NOW(), NOW(),
        '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Khoa@test.com'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`) 
    VALUES('Nate',0, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Nate@test.com'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`) 
    VALUES('Kevin',0, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'kevin@test.com'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`,`picture`) 
    VALUES('Kan',1, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Kan@test.com',
        'https://avatars0.githubusercontent.com/u/8520106?v=3&s=400'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`, `picture`) 
    VALUES('Sergey',1, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Sergey@test.com',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/552453_10150606395761010_779695352_n.jpg?oh=a4254cc5fd50ec05687d03b27a5b7b1b&oe=58EDCC43'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`, `picture`) 
    VALUES('Daria',1, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Daria@test.com',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10420013_10152477254181563_8453790733562109721_n.jpg?oh=a60f0b79334e3330838497e958e94bb9&oe=58EE9CAE'
    );
INSERT INTO `User` (`name`,`teachFlag`,`createdAt`, `updatedAt`,`bio`,`spare1`, `picture`) 
    VALUES('Ricky',1, NOW(), NOW(),
       '{
            "title":"",
            "blurb":"I enjoy long walks on the beach and teaching people how to dance.",
            "qualifications":["blackbelt in tai chi","breakdancing","Dungeon Master Level 3"]
        }',
        'Ricky@test.com',
        'https://avatars1.githubusercontent.com/u/12319192?v=3&s=400'
    );


INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('dance', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('driving', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('cooking', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('javascript', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('surfing', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('powerlifting', NOW(), NOW());
INSERT INTO `Category` (`name`,`createdAt`, `updatedAt`) VALUES('music', NOW(), NOW());

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
    (select id from user where name='Kan'),
    (select id from category where name='surfing'),
    'How to surf',
    'lesson details go here',
    4.5,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Kan'),
    (select id from category where name='dance'),
    'How to do breakdance',
    'lesson details go here',
    4.5,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Sergey'),
    (select id from category where name='music'),
    'How to freestyle',
    'lesson details go here',
    4.5,
    NOW(),
    NOW()
);

INSERT INTO `Lesson` (`UserId`,`CategoryId`,`name`,`details`,`rating`,`createdAt`, `updatedAt`) VALUES(
    (select id from user where name='Sergey'),
    (select id from category where name='powerlifting'),
    'How to lift bro',
    'lesson details go here',
    4.5,
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