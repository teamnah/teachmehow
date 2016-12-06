
/**
 * Get lesson(s) getLesson()
 *  IF client provides a userId, get will return all lessons associated 
 *  with that teacher
 * Post lesson(s) addUpdateLesson()
 *  client provides a lessonId assumes its an update
 *  
 *  client NEEDS to provide a userName, and program will assume that is 
 *  a teacher doing the request, this will either post or update lesson
 * 
 */

const models = require('../../config/db.connect.js');

module.exports = {

  getLesson: (req, res, next) => {
    console.log("LessonCtrlr:getLesson: request initiated", req.query.lessonId);
    if(req.query.lessonId){
      models.Lesson.findOne({
        where: {
          id: req.query.lessonId
        }
      })
      .then(result=>{
        let tmp = [];
        result === null || result === undefined ? result : tmp.push(result);
        res.json(tmp);
      })
      .catch(err=>{
        console.log("LessonCtrlr:getLesson: Error", err);
      })
    }else{
      models.Lesson.findAll({})
      .then(result=>{
        let allItems = [];
        result.map(item=>{
          allItems.push(item.dataValues);
        })
        //console.log("LessonCtrlr:getAll: mapped results", allItems);
        res.json(result);
      })
      .catch(err=>{
        console.log("LessonCtrlr:getAll: Error trying to get all lessons", err);
      })
    }
  },

  addLesson: (req, res, next) => {

    console.log("LessonCtrlr:addLesson: request initiated", req.body);
    if (!req.body.userName || !req.body.category) {
      res.json([]);
      return
    }
    /**
     * We need to check if the user or parameter even exists and grab
     * the foreign key before we store it
     */
    let lessonConfig = {
      UserId: null,
      CategoryId: null,
    }
    lessonConfig.name = req.body.name ? req.body.name : null;
    lessonConfig.details = req.body.details ? req.body.details : null;
    //lessonConfig.rating = req.body.rating ? req.body.rating : null;

    models.User.findOne({
      where: {
        name: req.body.userName
      }
    })
    .then(result=>{
      /** Check if user exists AND is a teacher */
      if (result !== null && result.id && result.teachFlag) {
        lessonConfig.UserId = result.id;
        return models.Category.findOrCreate({
            where: {
              name: req.body.category
            },
            defaults: {
              name: req.body.category
            }
          })
      } else {
        res.json([]);
      }
    })
    .then(result=>{
      if (result) {
        /**
         * Find or create returns the instance created
         * and if bool if was already created
         */
        lessonConfig.CategoryId = result[0].id;
        return models.Lesson.create({
          name: lessonConfig.name,
          details: lessonConfig.details,
          UserId: lessonConfig.UserId,
          CategoryId: lessonConfig.CategoryId,
        })
      } else {
        res.json([]);
      }
    })
    .then(result=>{
      let tmp = [];
      if (result) {
        tmp.push(result);
        res.json(tmp)
      } else {
        res.json(tmp);
      }
    })
    .catch(err => {
      console.log("LessonCtrl:addLesson: ERROR", err);
      res.json(err);
    })

  },

  updateLesson: (req, res, next) => {
    console.log("LessonCtrlr:updateLesson: request initiated", req.body);
    
     if (!req.body.userId || !req.body.lessonId) {
      res.json([]);
      return
    }
    /**
     * We need to check if the user or parameter even exists and grab
     * the foreign key before we store it. Client can only update 
     * name and details as of now
     */
    let lessonConfig = {};
    lessonConfig.name = req.body.name ? req.body.name : null;
    lessonConfig.details = req.body.details ? req.body.details : null;

    models.Lesson.findOne({
      where: {
        id: req.body.lessonId
      }
    })
    .then(result=>{
      if (result) {
        /**
         * will update everything so the user needs to confirm on 
         * the client side all the details
         */
        result.name = lessonConfig.name;
        result.details = lessonConfig.details;
        return result.save();
      } else {
        res.json([])
      }
    })
    .then(result=>{
      console.log("LessonCtrl:updateLesson: SUCCESS");
      res.json(result);
    })
    .catch(err => {
      console.log("LessonCtrl:updateLesson: ERROR", err);
      res.json(err);
    })

  }

}