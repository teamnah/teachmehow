const express = require('express')  
const app = express()  
require('dotenv').config()  

const port = process.env.PORT || 8080  

require('./config/middleware.js')(app, express)  
require('./routes/routes.js')(app, express)  
require('./config/db.connect.js')  

app.listen(port,()=>{
   console.log("Listening on port " + port)  
})  