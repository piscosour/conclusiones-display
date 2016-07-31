var express = require('express');
var request = require('request');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
	request('https://project-6722543956780044361.appspot.com/getsecciones/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var secciones = JSON.parse(body);
			var data;

			res.render('conclusion_index', { data: secciones });
		};
	});
});

app.get('/:conclusionId', function(req, res) {
	conclusionId = req.params.conclusionId;

	request('https://project-6722543956780044361.appspot.com/getconclusiones/id/' + conclusionId, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var conclusion = JSON.parse(body);
			res.render('conclusion_display', conclusion);
		};
	});
});

var server = app.listen(process.env.PORT || '8080', function () {
	console.log('App listening on port %s', server.address().port);
	console.log('Press Ctrl+C to quit.');
});
