const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/clientes', require('../routes/cliente'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;