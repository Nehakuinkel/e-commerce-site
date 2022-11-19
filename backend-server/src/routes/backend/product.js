let express = require('express');
let router = express.Router();

let { getProducts, addProducts } = require('../../controllers/product');

router.get('/getProduct', getProducts);
router.post('/addProduct', addProducts);


module.exports = router;