const { request, response } = require("express");
const { createUsuario } = require("../service/usuario");

const createUsuarioController = async (req = request, res = response) => {
    const { nombreUsuario, correo, clave, rol, estado } = req.body;    
    const respuesta = await createUsuario(nombreUsuario, correo, clave, rol, estado);
    res.status(respuesta.status).json(respuesta);
}

module.exports = {
    createUsuarioController
}