var SERVICENAME = "Activity Logging Service";
var express = require('express'), fs = require('fs');
var app = require('express').createServer();

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.use(function(err, req, res, next) {
	//console.log('bad post body =>');
	//console.log(req);
	//console.error(err.stack);
	res.send(500, 'Invalid JSON submitted.');
});

app.get('/', function(req, res) {
	//console.log('GET /');
    res.send(200);
});

app.get('/favicon.ico', function(req, res) {
	// route favicon requests into nothingness
	//console.log('GET /favicon');
    //res.send(302);
});

app.post('/als/activity', function(req, res) {
	//console.log('POST /als/activity');

	if(req.body.activity.type === 'search') {
		//console.log('log search activity');
		// write search activity to mongodb

		var activity = JSON.stringify(req.body.activity) + "\n";
		var date = new Date();
		fs.appendFile('search.activity.json', "[" + date +  "] " + activity, function(err){
			if(err) {
				console.log('error attempting to write to search.activity.json');
				console.log(err);
			} else {
				//console.log('wrote to log');
			}
		});
	} else {
		console.log('type not valid or undefined');
	}



	res.send(200);
});



console.log(SERVICENAME + " is starting...");
app.listen(process.env.VCAP_APP_PORT || 3000);