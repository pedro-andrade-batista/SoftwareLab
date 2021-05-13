module.exports.getAllVaccines = (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let VaccineDAO = new server.application.DAO.VaccineDAO(connection);
    VaccineDAO.getAllVaccine(function(error,sucess) {
        if(sucess){
            console.log(sucess);
        }
    })
}