const models = require('../../config/db.connect.js');

module.exports = {
  getAllRequests: (req, res, next) => {
    
  },
  /** inputs are name of the request, the user making the request, and the category */
  addOneRequest: (req, res, next) => {
    console.log('In the add one request controller');
    console.log('Username that is sent', req.body.username);
    let temp = {
      UserId: null,
      CategoryId: null
    }
    models.User.findOne({
      where: {
        name: req.body.username
      }
    })
    .then((user) => {
      temp.UserId = user.dataValues.id; 
      return models.Category.findOne({
        where: {
          name: req.body.categoryName
        }
      })
      .then((category) => {
        console.log('This is what temp looks like before', temp);
        temp.CategoryId = category.dataValues.id;
        console.log('This is what temp looks like after', temp);
        res
          .json(category)
      })
    })


    // models.Request.create({
    //   name: req.body.name,
    //   UserId: temp.UserId,
    //   CategoryId: temp.CategoryId
    // })
    // .then((request) => {
    //   res
    //     .json(request)
    // })

  },
  updateOneRequest: (req, res, next) => {

  }, 
  getRequestByTeacherCategory: (req, res, next) => {
    
  }
}

// pretend this is a controller
// module.exports = () => {
    // let tmp = {
    //     UserId: null,
    //     CategoryId: null
    // }
    // console.log('in test');
    // var khoa = models.User.create({
    //     name: "khoa"
    // })
    // .then((result)=>{
    //     console.log("----- Result of User add", result.dataValues);
    //     tmp.UserId = result.dataValues.id;
    //     return models.Category.create({
    //         name: "driving"
    //     })
    // })
    // .then((result)=>{
    //     console.log("----- Result of Category add", result.dataValues);
    //     return models.Request.create({
    //         name: "myRequest",
    //         UserId: tmp.UserId,
    //         CategoryId: result.dataValues.id
    //     })
    // })
    // .catch(err=>{
    //     console.log("there was an error in the test", err);
    // })
// }