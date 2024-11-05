const Role = require("../models/role");

const validarRolExiste = async (rol) => {
    const role = await Role.findOne({
        where: {
            role: rol
        }
    });
    if(!role){
        throw new Error(`El rol ${rol} no existe`);
    }
}

const existeNombreUsuario = () => {

}

module.exports = {
    validarRolExiste,
    existeNombreUsuario
};