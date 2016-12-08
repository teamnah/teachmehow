# Teach Me How

A platform for connecting people who want to learn things with people who want to teach things.

## Team

  - __Product Owner__: Nate Hart
  - __Scrum Master__: Kevin Amirdjanian
  - __Development Team Members__: Khoa Nguyen

## Table of Contents

* [Configuration](#configuration)
* [Technologies Used](#technologies-used)
* [Existing Features] (#existing-features)
* [Features for Future Releases] (#features-for-future-releases)
* [Known Issues] (#known-issues)
* [Contributing] (#contributing)

## Configuration

1. Fork and clone this repo
2. In your terminal within the root directory type **npm install** and then **bower install**
3. Open two tabs in terminal
4. In the first tab, type **npm start**
5. In the second tab start your mysql server by running the following: **mysql -u root -p**
6. Visit **http://localhost:8080/**
7. Populate dummy data by navigating to server/config/dbDummyData.sql and following population instructions therein

## Technologies Used 

* [MySQL] (http://dev.mysql.com/doc/)
* [Sequelize] (http://docs.sequelizejs.com/en/v3/)
* [Express](http://expressjs.com/)
* [Angular] (https://angularjs.org/)
* [Node](https://nodejs.org/en/)

## Existing Features

* **Authentication**: Use of AuthO to handle authentication. Logging in creates a user object that can be accessed app-wide via the authService service. Users can log in as a teacher or student. 
* **Lesson Presentation**: Ability to view all offered lessons and, if logged in, navigate to the lesson page and book the lesson. 
* **Teacher Dashboard**: If logged in as a teacher, page from which the teacher can add and view lessons they teach. 
* **Lesson Pages**: Pages that describe lesson with data pulled from mysql database. Also display relevant lessons in the same category.
* **Profiles**: Profile pages that display user information. 

## Features for Future Releases

* **Redis**: Implementation of redis to reduce amount of reads to database.
* **Voting System**: Addition of upvote/downvote system on requested lessons such that the mostly highly rated requests float to the top.
* **Rating System**: Ability to rate lessons and have ratings of teachers be an average of the ratings of their lessons.
* **Messaging and Scheduling System**: Allow for communicationc between students and teachers.

## Known Issues

* **No Auth Check on Teacher Dashboard Navigation**: Anybody can access any other's teacher dashboard by simply typing in the teacher id in the url i.e. dash/[number]. Need to add an authorization check on this navigation.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
