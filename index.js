const server = require('./application/config/init.js');

server.listen(80, () => {
    console.log(`servidor rodando na porta 80`);
})