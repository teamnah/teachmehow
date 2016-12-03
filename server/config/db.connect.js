const Sequelize = require('sequelize')

/** 
 * Define paths to each model
 */
const modelPaths = [
  // __dirname+'/../db/booking/BookingModel.js',
  // __dirname+'/../db/category/CategoryModel.js',
  // __dirname+'/../db/lesson/LessonModel.js',
  // __dirname+'/../db/rating/RatingModel.js',
  // __dirname+'/../db/requests/RequestModel.js',
  // __dirname+'/../db/user/UserModel.js'
]

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5, 
    min: 0,
    idle: 10000
  },
})

/**
 * Verify SQL connection has been established
 */
sequelize
  .authenticate()
  .then(message=>{
    console.log('Connection has been established to:', process.env.DB_HOST)
  })
  .catch(err=>{
    console.log("Error connecting to SQL database", err)
  })

const db = {}

/**
 * Allows us to reference each model from the db object
 * so we don't need to require different paths for different 
 * models each time we need to access a model
 */
modelPaths.forEach(path=>{
  let model = sequelize.import(path)
  db[model.name] = model
})

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

