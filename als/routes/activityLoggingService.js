/* Activity Logging Service */
var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, { auto_reconnect : true}));
db = new Db('activity', server);

db.open(function(err, db)) {
	if(!err) {
		console.log("connected to 'actvity' database");
		db.collection('searches', { strict : true }, function(err, collection) {
			if(err) {
				console.log("the 'searches' collection doesn't exist; creating now...");
				populateDB();
			}
		});
	}
});