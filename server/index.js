const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');


var bodyParser = require('body-parser')
const app = express();
//use express.json() to get data into json format
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: true })
//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());
app.use(bodyParser.json())
app.use(urlencodedParser)
//import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );