const express = require('express')  
const app = express()  
const routes = require('./routes/routes.js')  
require('dotenv').config()

const port = process.env.PORT || 8080  

require('./config/middleware.js')(app, express)  
require('./config/db.connect.js')  

app.use('/api', routes)

app.listen(port,()=>{
   console.log("Listening on port " + port)  
})
