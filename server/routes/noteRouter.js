const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/",(req, res)=>
{
   res.send("Note Get Router");
});

noteRouter.post("/", (req, res)=>
{
   res.send("Note Post Router");
});

module.exports = noteRouter;