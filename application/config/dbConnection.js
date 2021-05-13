var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '358900',
		database : 'trabalho_gps'
	});
}


module.exports = function () {
	return connMySQL;
}