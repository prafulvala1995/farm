var express = require('express');
const { checkToken } = require('../middleware/auth');
const { add_cart, update_cart, delete_cart, cart_product, all_cart } = require('../Controller/cart');
var router = express.Router();

/* GET home page. */
router.post('/', add_cart)
router.post('/update/:id', update_cart)
router.delete('/delete/:id', delete_cart)
router.get('/get/:userId', cart_product)
router.get('/all', all_cart)

module.exports = router;