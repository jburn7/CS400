let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('ps3', { str: 'Hello, Perry' });
});

router.post('/', (req, res, next) => res.render('ps3', {str: req.query.str, len: req.query.str.length}))

module.exports = router;