//import
const express = require('express');
const router = express.Router();

//get request
router.get('/', (req, res) => res.send('Hello World from Router'));

//export router
module.exports = router;
