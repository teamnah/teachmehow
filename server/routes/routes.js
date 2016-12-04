const express = require('express')
const router = express.Router()

const bookingController = require('../db/booking/BookingController.js')
const categoryController = require('../db/category/CategoryController.js')
const lessonController = require('../db/lesson/LessonController.js')
const ratingController = require('../db/rating/RatingController.js')
const requestController = require('../db/request/RequestController.js')
const userController = require('../db/user/UserController.js')

router
  .route('/users/:userId')
    .get(userController.getUserDetails)

router
  .route('/lessons')
    .get(lessonController.getAllLessons)
    .post(lessonController.addOneLesson)

router
  .route('/lessons/:userId')
    .get(lessonController.getAllLessons)

router
  .route('/lessons/:lessonId')
    .get(lessonController.getOneLesson)
    .put(lessonController.updateOneLesson) 
    .delete(lessonController.deleteOneLesson)

router
  .route('/ratings/:lessonId')
    .get(ratingController.getRating)
    .post(ratingController.addRating)

router
  .route('/ratings/:userId')
    .get(ratingController.getRating)
    .post(ratingController.addRating)

router
  .route('/requests/:teacherId')
    .get(requestController.getRequestByTeacherCategory)

router
  .route('/requests')
    .get(requestController.getAllRequests)
    .post(requestController.addOneRequest)

router
  .route('/requests/:requestId')
    .put(requestController.updateOneRequest)

module.exports = (app, express) => {
  return router
}