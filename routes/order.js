var express = require('express');
const { checkToken } = require('../middleware/auth');
const { add_order, update_order, delete_order, order_product, all_order, month_income } = require('../Controller/order');
var router = express.Router();

/* GET home page. */
router.post('/', add_order)
router.post('/update/:id',update_order)
router.delete('/delete/:id', delete_order)
router.get('/get/:userId', order_product)
router.get('/all', all_order)
router.get('/income ', month_income)

module.exports = router;