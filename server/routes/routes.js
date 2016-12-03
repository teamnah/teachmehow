const express = require('express')
const router = express.Router()

const bookingController = require('../db/booking/BookingController.js')
const categoryController = require('../db/category/categoryController.js')
const lessonController = require('../db/lesson/lessonController.js')
const ratingController = require('../db/rating/ratingController.js')
const requestController = require('../db/request/requestController.js')
const userController = require('../db/user/userController.js')

/** 
 * We will probably need to create a querystring on the gets to the same end point with different outcomes 
 * We can use the qs parameters as inputs to the controller function and these inputs determine what data to retrieve
 * We can use the request/request-promise npm module to achieve this 
 * Note: If we do this route we will need to document in the API 
 */

router
  .route('/users/:userId')
  // /** Splash Page */ GET to userController: a function that grabs student details and populates the profile data 
  // /** Lesson Page */ GET to userController: a function that grabs teacher details and populates them
  // /** Profile Page */ GET to userController: a function that grabs user information, whether student or teacher depends on login 
  // /** Teacher Dashboard */ GET to userController: a function where we pass in the teacher id as the param and retrieve the list of lessons offered

router
  .route('/lessons')
  // /** Splash Page */ GET to lessonController: a function that returns all lesson data

router
  .route('/lessons/:lessonId')
  // /** Lesson Page */ GET to lessonController: a function that grabs specific lesson information from the db
  // /** Lesson Page */ PUT to lessonController: a function that adds a lesson to the collection of lessons 

router
  .route('/lessons/:teacherId')
  // /** Teacher Dashboard */ GET to lessonController: a function where we pass in the teacher id as the param and retrieve the list of lessons offered
  // /** Teacher Dashboard */ POST to lessonController: a function where we enter som e new lesson information and associate it with the teacher 
  // /** Teacher Dashboard */ delete to lessonController: a function where we delete the lesson info from the db

router
  .route('/ratings/:lessonId')
  // /** Lesson Page */ GET to ratingController.: a function where we pass in the lesson id as the param and retrieve the ratings

router
  .route('/ratings/:teacherId')
  // /** Profile Page */ GET to ratingController: a function where we pass in the lesson id as the param and retrieve the ratings for the teacher?

router
  .route('/requests/":somethingId"')
  // /** Teacher Dashboard */ GET to requestController: a function where we make a join table that retrieves a list of requests in the teachers cat?

router
  .route('/requests')
  // /** Requests */ GET to requestController to GET all requests data
  // /** Requests */ POST to add a request to the table
  // /** Requests */ PUT to update an existing request (i.e. with an upvote or new information)

module.exports = (app, express)=>{
  return router
}