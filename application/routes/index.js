const { getAllVaccines } = require('../controller/VaccineController');
module.exports = function(server) { 

    server.get('/', (req, res) => {
        res.render('home');
    })

    server.get('/vaccines', (req, res) => {
        getAllVaccines(server, req, res);
    })



}