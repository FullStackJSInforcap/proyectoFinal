const { findAllClientes, findByIdCliente, createCliente, updateCliente, deleteById } = require("./service/cliente");

deleteById( 11 ).then((datos) => {
    console.log(datos);
}).catch((error) => {
    console.log(error);
});