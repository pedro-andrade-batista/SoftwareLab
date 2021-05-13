const { allVaccinated, getOneVaccinated, updateVaccinated, deleteVaccinated, saveVaccinated, showForm } = require('../controller/VaccinatedController');

module.exports = (server) => {
    

    server.get('/allVaccinated', (req, res) => {
        allVaccinated(server,req,res);
    })

    
    server.get('/formAtt/:id', (req, res) => {
        getOneVaccinated(server, req, res);
    })

    server.post('/attVaccinated', (req, res) => {
        updateVaccinated(server, req, res);
    })

    server.get('/deleteVaccinated/:id', (req, res) => {
        deleteVaccinated(server, req, res);
    })

    server.get('/formRegister', (req, res) => {
        showForm(server, req, res);
    })

    server.post('/form/register', (req, res) => {
        saveVaccinated(server, req, res)
    })

}