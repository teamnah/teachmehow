const models = require('../../config/db.connect.js');

module.exports = {
  getChatroom: (req, res, next) => {
    if (req.query.id) {
      models.Chatroom.findOne({
        where: {
          id: req.query.id
        }
      })
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          throw err;
        });
    } else {
      models.Chatroom.findAll({})
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          throw err;
        });
    }
  },

  addChatroom: (req, res, next) => {
    let temp = {
      LessonId: null
    };
    models.Lesson.find({
      where: {
        id: req.body.LessonId
      }
    })
      .then((lesson) => {
        console.log('lesson:', lesson);
        temp.LessonId = lesson[0].dataValues.id;
        return models.Chatroom.create({
          name: req.body.name,
          lessonId: temp.LessonId,
          chat: req.body.chat
        });
      })
      .then((chatroom) => {
        if (chatroom) {
          res.json(chatroom);
        } else {
          res.json([]);
        }
      })
      .catch((err) => {
        res.json(err);
        throw err;
      });
  },

  updateChatroom: (req, res, next) => {
    if (!req.body.chatroomId) {
      res.json([]);
      return;
    }

    let chatroomConfig = {};
    chatroomConfig.name = req.body.name ? req.body.name : null;
    chatroomConfig.chat = req.body.chat ? req.body.chat : null;

    models.Chatroom.findOne({
      where: {
        id: req.body.chatroomId
      }
    })
      .then(result => {
        if (result) {
          result.name = chatroomConfig.name;
          result.chat = chatroomConfig.chat;
          return result.save();
        } else {
          res.json([]);
        }
      })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
        throw err;
      });
  }
};
