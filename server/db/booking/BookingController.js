const models = require('../../config/db.connect.js');

module.exports = {

  /**
   * getBooking() queries for all instances in the Booking Table
   *
   * input(optional): queries for categories with matching id
   *  or queries for everything
   *
   * output: result of query
   */

  getBooking: (req, res, next) => {
    if (req.query.id) {
      models.Booking.findAll({
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
      models.Booking.findAll({})
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
