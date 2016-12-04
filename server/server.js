const express = require('express')  
const app = express()  
const routes = require('./routes/routes.js')  
require('dotenv').config()

const port = process.env.PORT || 8080  

require('./config/middleware.js')(app, express)  

/**
 * compiling all models into the model object
 * all models can now be accessed by models.[modelName]
 */
const models = require('./config/db.connect.js')  

app.use('/api', routes)

/**
 * Sync all SQL models and THEN start the express server, 
 * otherwise you run the risk of your code running before
 * the models have finished syncing with the database 
 * 
 */
models.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log("Listening on port " + port)
    })
})
