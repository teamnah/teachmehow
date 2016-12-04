const getAllLessons = (req, res) =>{
  /**
   * Make request to db to retrieve all lessons
   * 
   */ 
}

const getOneLesson = (req, res) =>{
  /**
   * use req.body.param to grab the lessonId then query the db for it
   * 
   */ 
}

const addOneLesson = (req, res) =>{
  /**
   *  add lesson 
   * 
   */ 
}

const updateOneLesson = (req, res) =>{
  /**
   * use req.body.param to grab the lesson id and update
   * 
   */ 
}

const deleteOneLesson = (req, res) =>{
  /**
   * use req.body.param to grab the lesson id and delete
   * 
   */ 
}

module.exports = (app, express)=>{
  return {
    getAllLessons: getAllLessons,
    getOneLesson: getOneLesson,
    addOneLesson: addOneLesson,
    updateOneLesson: updateOneLesson,
    deleteOneLesson: deleteOneLesson
  }
}