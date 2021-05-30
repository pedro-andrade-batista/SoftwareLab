const VaccineDAO = require("../DAO/VaccineDAO");

module.exports.getAllVaccines = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    VaccineDAO.getAllVaccine(function(error,sucess) {
        if(sucess){
            console.log(sucess);
        }
    })
}

module.exports.allVaccines = function(server, req, res) {

    let connection = server.application.config.dbConnection();
    
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);

    VaccineDAO.getAllVaccine(function(error,sucess) {
        if(sucess){
            res.render('allVaccines', {vaccine : sucess});
        }
    })
}

module.exports.saveVaccine = (server, req, res) => {
    let vaccine = req.body;
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    VaccineDAO.saveVaccine(vaccine, (error, sucess) => {
        if(error) {
            res.send(error);
        } 
        else 
            res.redirect('/allVaccines');
    })
}

module.exports.deleteVaccine = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    let idVaccine= req.params.id;
    VaccineDAO.deleteVaccine(idVaccine,(error, sucess) => {
        if(error)
            return;
        res.redirect('/allVaccines');
    })
}

module.exports.showFormVaccines = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    VaccineDAO.getAllVaccine(function(error,sucess) {
        if(sucess){
            res.render('formRegisterVaccine', {vaccine: sucess});
        }
    })
}