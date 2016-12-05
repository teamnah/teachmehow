const models = require('../../config/db.connect.js');

module.exports = {
  getAllUsers: (req, res, next) => {

  },

  getUserDetails: (req, res, next) => {
    models.User.find({
      where: {
        id: req.params.userId
      }
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
  }, 

  addOneUser: (req, res, next) => {
   models.User.create({
      name: req.body.name,
      teachFlag: req.body.teachFlag,
      rating: null,
      bio: req.body.bio,
      picture: req.body.picture,
      auth: req.body.auth
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
  }
};

// models.User.findOrCreate({
//   where: {
//     name: req.body.name
//   },
//   defaults: {
//     name: req.body.name,
//     teachFlag: req.body.teachFlag,
//     rating: null,
//     bio: req.body.bio,
//     picture: req.body.picture,
//     auth: req.body.auth
//   }
// })
// .then(())