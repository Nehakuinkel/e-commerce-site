let express = require('express');

let router = express.Router();
var backendRouter=express.Router();

let backendProductRouter = require('./backend/product');
let backendHomeRouter = require('./backend/home')

backendRouter.use("/",
backendProductRouter,
backendHomeRouter
)

router.use('/backend', backendRouter);

module.exports=router;