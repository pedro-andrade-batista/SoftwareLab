function VaccineDAO (connection){
    this._connection = connection;
}

VaccineDAO.prototype.getAllVaccine = function (callback) {
    this._connection.query(`select * from vaccine_table`, callback);
}

VaccineDAO.prototype.saveVaccine = function (vaccine, callback) {
    console.log(vaccine);
    this._connection.query('insert into vaccine_table set ?', vaccine, callback);
}

VaccineDAO.prototype.deleteVaccine = function(idVaccine, callback){
    this._connection.query('delete from vaccine_table where id = ?', idVaccine, callback);
}

module.exports = function(){
    return VaccineDAO;
};