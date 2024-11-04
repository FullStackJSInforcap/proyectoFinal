const { findAllClientes, findByIdCliente, createCliente } = require("./service/cliente");

createCliente('22222222-2', 'nombre dos cliente', 'direccion dos cliente', 'correoDosCliente@mail.com', '987654321').then((datos) => {
    console.log(datos);
}).catch((error) => {
    console.log(error);
});