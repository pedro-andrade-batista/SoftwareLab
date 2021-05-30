const VaccinatedDAO = require("../DAO/VaccinatedDAO");

module.exports.allVaccinated = function(server, req, res) {

    let connection = server.application.config.dbConnection();
    
    let VaccinatedDAO = new server.application.DAO.VaccinatedDAO(connection);

    VaccinatedDAO.getAllVaccinatedAndVaccine(function(error,sucess) {
        if(sucess){
            res.render('allVaccinated', {vaccinated : sucess});
        }
    })
}

module.exports.getOneVaccinated = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let vaccinatedDAO = new server.application.DAO.VaccinatedDAO(connection);
    let idVaccinated = req.params.id;
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    vaccinatedDAO.getOneVaccinated(idVaccinated, (error, sucess) =>{
        if(error)
            return;
        let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
        VaccineDAO.getAllVaccine(function(error2,sucess2) {
            if(error2){
                console.log(error2);
                return;
            }
            res.render('formAtt', {vaccinated : sucess[0], vaccine: sucess2});
        })
    });
}

module.exports.updateVaccinated = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let vaccinatedDAO = new server.application.DAO.VaccinatedDAO(connection);
    let vaccinated = req.body;
    vaccinated.second_vaccine = parseInt(vaccinated.second_vaccine);
    vaccinatedDAO.updateVaccinated(vaccinated, (error, sucess) => {
        if(error){
            console.log(error);
            return;
        }
        res.redirect('/allVaccinated');
    })
}

module.exports.deleteVaccinated = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let vaccinatedDAO = new server.application.DAO.VaccinatedDAO(connection);
    let idVaccinated = req.params.id;
    vaccinatedDAO.deleteVaccinated(idVaccinated,(error, sucess) => {
        if(error)
            return;
        res.redirect('/allVaccinated');
    })
}

module.exports.saveVaccinated = (server, req, res) => {
    let vaccinated = req.body;
    let connection = server.application.config.dbConnection();
    let vaccinatedDAO = new server.application.DAO.VaccinatedDAO(connection);
    vaccinated.first_vaccine = parseInt(vaccinated.first_vaccine);
    vaccinatedDAO.saveNewVaccinated(vaccinated, (error, sucess) => {
        if(error){
            res.send(error);
            return;
        }
        else
            res.redirect('/allVaccinated');
    })
}

module.exports.showForm = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    VaccineDAO.getAllVaccine(function(error,sucess) {
        if(sucess){
            res.render('form', {vaccine: sucess});
        }
    })
}