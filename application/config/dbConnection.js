var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'database-1.cne4pisah95x.sa-east-1.rds.amazonaws.com',
		user : 'admin',
		password : 'adminaws',
		database : 'trabalho_gps'
	});
}


module.exports = function () {
	return connMySQL;
}