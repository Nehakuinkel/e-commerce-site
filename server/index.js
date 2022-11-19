const express = require('express');
const  conn  = require('./src/configs/db.configs');

const app = express();
app.use('/',require("./src/routes"));
app.listen(3000, ()=>console.log("App listening on port 3000"))