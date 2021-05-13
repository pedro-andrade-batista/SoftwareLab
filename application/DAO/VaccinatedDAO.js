function VaccinatedDAO (connection){
    this._connection = connection;
}

VaccinatedDAO.prototype.getAllVaccinatedAndVaccine = function (callback) {
    this._connection.query(`select 
        vct.id,
        vct.fullname,
        vct.birthdate,
        vct.suscard,
        vct.first_vaccine,
        vct.second_vaccine,
        vc.date_vaccine,
        vc.num_lote,
        vc.laboratory 
        from vaccinated_table vct join vaccine_table vc 
        on vct.first_vaccine = vc.id`, callback);
}

VaccinatedDAO.prototype.saveNewVaccinated = function(vaccinated, callback){
    this._connection.query('insert into vaccinated_table set ?', vaccinated, callback);
}

VaccinatedDAO.prototype.updateVaccinated = function(updatedVaccinated, callback){
    let sql = 'update vaccinated_table set fullname = ?, birthdate = ?, suscard = ?, second_vaccine = ? where id = ?';
    let data = [updatedVaccinated.fullname, updatedVaccinated.birthdate, updatedVaccinated.suscard,updatedVaccinated.second_vaccine, updatedVaccinated.id];
    this._connection.query(sql, data, callback);
}

VaccinatedDAO.prototype.getOneVaccinated = function(idVaccinated, callback){
    this._connection.query('select * from vaccinated_table where id = ?', idVaccinated, callback);
}

VaccinatedDAO.prototype.deleteVaccinated = function(idVaccinated, callback){
    this._connection.query('delete from vaccinated_table where id = ?', idVaccinated, callback);
}


module.exports = function(){
    return VaccinatedDAO;
};