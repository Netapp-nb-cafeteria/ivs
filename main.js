(function (database) {
var ivsDb = require('./data/database.js');

ivsDb.init(function(err, inited) {
	if (err) {
		console.log("db init failed" + err);
	} else {
		console.log("DB init successful");
	}
});
})(module.exports);
