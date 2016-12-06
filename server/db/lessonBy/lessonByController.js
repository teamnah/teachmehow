

const models = require('../../config/db.connect.js');

module.exports = {
  lessByCat: (req, res, next)=>{
    console.log("server:lessByCtrl: lessbyCat ", req.query.id);
    if(req.body.id){
      models.Category.findAll({
        where: {
          id: req.query.id
        },
        include: [models.Lesson]
      })
      .then(result=>{
        console.log("look here:", result.dataValues)
        res.json(result)
      })
      .catch(err=>{
        console.log("Error in user get lesson", err);
      })
    }else{
      models.Category.findAll({
        include: [models.Lesson]
      })
      .then(result=>{
        console.log("look here:", result.dataValues)
        res.json(result)
      })
      .catch(err=>{
        console.log("Error in user get lesson", err);
      })
    }
  },

  lessByUser: (req, res, next)=>{
    if(req.query.id){
      models.User.findAll({
        where: {
          id: req.query.id
        },
        include: [models.Lesson]
      })
      .then(result=>{
        console.log("look here:", result.dataValues)
        res.json(result)
      })
      .catch(err=>{
        console.log("Error in user get lesson", err);
      })
    }else{
      models.User.findAll({
        include: [models.Lesson]
      })
      .then(result=>{
        console.log("look here:", result.dataValues)
        res.json(result)
      })
      .catch(err=>{
        console.log("Error in user get lesson", err);
      })
    }
  }

}