let express = require('express');
let request = require('request');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var options = {
		'method': 'GET',
		'url': 'http://philosophy-quotes-api.glitch.me/quotes/author/Rumi',
		'headers': {
		}
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		let quotes = [];
		let json = JSON.parse(response.body);
		for(let i = 0; i < json.length; i++)
		{
			quotes.push(json[i].quote);
		}
		res.render('index', { title: 'PS4', quotes: quotes });
	});
});

module.exports = router;
