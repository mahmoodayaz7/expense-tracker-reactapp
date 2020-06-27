//import
const express = require('express');
const router = express.Router();

//import transactions controller
const {getTransactions, addTransactions, deleteTransactions} = require('../controllers/transactions');

//get request
//router.get('/', (req, res) => res.send('Hello World from Router'));

//get request from Controller now
router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

//export router
module.exports = router;
