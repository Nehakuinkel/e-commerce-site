let express = require('express');
let router = express.Router();

let { getProducts, addProducts, updateProducts, deleteProducts } = require('../../controllers/product');

router.get('/getProduct', getProducts);
router.post('/addProduct', addProducts);
router.patch('/updateProduct', updateProducts);
router.delete('/deleteProduct', deleteProducts);


module.exports = router;