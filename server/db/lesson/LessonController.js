
const models = require('../../config/db.connect.js');

module.exports = {
  /**
   * if userId param exists on request, only get lessons associated with that userId (teacher)
   * otherwise get all lessons
   */
  getAllLessons: (req, res, next) => {
    //console.log("Receiving a getAllLessons request");
    models.Lesson.findAll()
    .then(result=>{
      var stuff = [];
      result.map(item=>{
        stuff.push(item.dataValues);
      })
      //console.log(stuff);
      res.json(result);
    })
    .catch(err=>{
      console.log("ERROR: Trying to get all lessons", err);
    })
  },
  getOneLesson: (req, res, next) => {

  },
  addOneLesson: (req, res, next) => {

  },
  updateOneLesson: (req, res, next) => {

  },
  deleteOneLesson: (req, res, next) => {

  }
}