var express = require('express');
const { checkToken } = require('../middleware/auth');
const { add_list, update_list, delete_list, list_product, all_list } = require('../Controller/Wishlist');
var router = express.Router();

/* GET home page. */
router.post('/', add_list)
router.post('/update/:id', update_list)
router.delete('/delete/:id', delete_list)
router.get('/get/:userId', list_product)
router.get('/all', all_list)

module.exports = router;