const express = require('express');
const router = express.Router();

const bookingController = require('../db/booking/BookingController.js');
const categoryController = require('../db/category/CategoryController.js');
const lessonController = require('../db/lesson/LessonController.js');
const ratingController = require('../db/rating/RatingController.js');
const requestController = require('../db/request/RequestController.js');
const userController = require('../db/user/UserController.js');

router
  .route('/users')
    .get(userController.getAllUsers)
    .post(userController.addOneUser);

router
  .route('/users/:userId')
    .get(userController.getUserDetails);

router
  .route('/lessons')
    /** 
     * userId may be passed as params attached to the 
     * request object on a get request. If so, it will be used to get 
     * avilable lessons filtered by the userId so that they
     * may be presented on the teacher dashboard.
     */ 
    .get(lessonController.getLesson)
    .post(lessonController.addLesson)
    .put(lessonController.updateLesson);

router
  .route('/ratings/:lessonId')
    .get(ratingController.getRating)
    .post(ratingController.addRating);

router
  .route('/requests')
    /** 
     * userId may be passed as params attached to the 
     * request object on a get request. If so, it will be used to get 
     * lessons requested by students and filtered by the teacher's 
     * category so that they may be presented on the teacher dashboard.
     */ 
    .get(requestController.getAllRequests)
    .post(requestController.addOneRequest);

router
  .route('/requests/:requestId')
    .put(requestController.updateOneRequest);

module.exports = router;