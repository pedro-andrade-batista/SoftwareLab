function VaccineDAO (connection){
    this._connection = connection;
}

VaccineDAO.prototype.getAllVaccine = function (callback) {
    this._connection.query(`select * from vaccine_table`, callback);
}

module.exports = function(){
    return VaccineDAO;
};