const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const noteRouter = require("./routes/noteRouter.js")
const userRouter = require("./routes/userRoutes.js")

var bodyParser = require('body-parser')

//use express.json() to get data into json format
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: true })
//Port 
const PORT = process.env.PORT || 5500;

//Authentication
app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=> {
    res.send("Hello");
});

//use cors
app.use(cors());
app.use(bodyParser.json())
app.use(urlencodedParser)
//import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> {
    console.log("Database connected");
})
.catch((error)=> { console.log(error);
})


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );

