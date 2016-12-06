

const models = require('../../config/db.connect.js');

module.exports = {
  getCat: (req, res, next)=>{
    if(req.query.id){
      models.Category.findAll({
        where: {
          id: req.query.id
        }
      })
      .then(result=>{
        console.log("look here:", result.dataValues)
        res.json(result)
      })
      .catch(err=>{
        console.log("Error in user get lesson", err);
      })
    }else{
      models.Category.findAll({})
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