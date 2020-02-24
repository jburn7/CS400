let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('ps3', { string: 'Hello, Perry' });
});

router.post('/', (req, res, next) => res.render('ps3', {string: req.body.string, len: req.body.string.length}))

module.exports = router;