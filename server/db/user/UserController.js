const models = require('../../config/db.connect.js');

module.exports = {
  getAllUsers: (req, res, next) => {
    models.User.findAll({})
    .then((users) => {
      res.json(users);
    });
  },

  getUserDetails: (req, res, next) => {
    models.User.find({
      where: {
        id: req.params.userId
      }
    })
    .then((user) => {
      let tmp = [];
      if (user) tmp.push(user);
      res.json(tmp);
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
  },

  findUser: (req, res, next) => {
    models.User.find({
      where: {
        auth: req.body.auth
      }
    }).then((user) => {
      let tmp = [];
      if (user) tmp.push(user);
      res.json(tmp);
    })
    .catch((err) => {
      res.json(err);
    });
  }
};