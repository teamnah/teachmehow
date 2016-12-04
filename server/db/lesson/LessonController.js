module.exports.getAllLessons = (req, res) => {
  /**
   * Make request to db to retrieve all lessons
   * Check for teacherId param, if it exists only grab
   * lessons associated with that userId (teacher)
   * Otherwise get all lessons
   * 
   */ 
}

module.exports.getOneLesson = (req, res) => {
  /**
   * use req.body.param to grab the lessonId then query the db for it
   * 
   */ 
}

module.exports.addOneLesson = (req, res) => {
  /**
   *  add lesson 
   * 
   */ 
}

module.exports.updateOneLesson = (req, res) => {
  /**
   * use req.body.param to grab the lesson id and update
   * 
   */ 
}

module.exports.deleteOneLesson = (req, res) => {
  /**
   * use req.body.param to grab the lesson id and delete
   * 
   */ 
}
