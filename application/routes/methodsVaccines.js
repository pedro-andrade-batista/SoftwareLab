const { allVaccines, saveVaccine, showFormVaccines, deleteVaccine} = require('../controller/VaccineController');

module.exports = (server) => {
    
    server.get('/allVaccines', (req, res) => {
        allVaccines(server,req,res);
    })

    server.post('/form/registerVaccine', (req, res) => {
        saveVaccine(server, req, res)
    })

    server.get('/formRegisterVaccine', (req, res) => {
        showFormVaccines(server, req, res);
    })

    server.get('/deleteVaccine/:id', (req, res) => {
        deleteVaccine(server, req, res);
    })
}

