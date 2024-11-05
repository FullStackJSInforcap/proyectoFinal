const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");

const createUsuario = async (nombreUsuario, correo, clave, rol, estado) => {
    try {
        // validar existencia de usuario
        const existeNombreUsuario = await Usuario.findOne({ where: { nombreUsuario } });
        if (existeNombreUsuario) {
            return {
                msg: `Nombre de usuario ${nombreUsuario} ya existe, no se puede crear Usuario`,
                status: 400,
                datos: []
            }
        }
        // validar existencia correo
        const existeCorreo = await Usuario.findOne({ where: { correo } });
        if (existeCorreo) {
            return {
                msg: `Correo ${correo} ya existe, no se puede crear Usuario`,
                status: 400,
                datos: []
            }
        }
        // encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        clave = bcryptjs.hashSync(clave, salt);

        // insertamos
        const usuario = await Usuario.create({
            nombreUsuario, correo, clave, rol, estado
        });
        return {
            msg: `El usuario con nombre de usuario ${nombreUsuario} se insertó correctamente`,
            status: 201,
            datos: []
        }
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    createUsuario
}