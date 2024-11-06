const { Router } = require('express');
const { createUsuarioController, updateUsuarioController } = require('../controllers/usuario');
const { check } = require('express-validator');
const { validatorCampos } = require('../middlewares/validator-campos');
const { validarRolExiste, existeNombreUsuario, existeCorreo } = require('../helpers/validator-bd');
const Usuario = require('../models/usuario');

const router = Router();

router.post('', [
    check('nombreUsuario', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('clave', 'La clave es obligatoria').not().isEmpty(),
    check('clave', 'La clave debe tener mas de 5 caracteres y menos de 10').isLength({ min: 5, max: 10 }),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('rol').custom(validarRolExiste),
    check('nombreUsuario').custom(existeNombreUsuario),
    check('correo').custom(existeCorreo),
    validatorCampos
], createUsuarioController);

router.put('', [
    check('nombreUsuario', 'El nomre de usuario es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('clave', 'La clave es obligatoria').not().isEmpty(),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('nombreUsuario').custom(existeNombreUsuario),
    check('correo').custom(existeCorreo),
    check('rol').custom(validarRolExiste),
    /* check('clave').custom((clave) => {
        // Empieza con mayuscula, termina con numero
        const regex = /^[A-Z].*\d$/;
        console.log(!regex.test(clave));
        if(!regex.test(clave)){
            throw new Error('La clave no es fuerte');
        }
    }), */
    /* check('id').custom( async (id) => {
        const usuario = await Usuario.findOne({
            where: {
                id
            }
        });
        if(usuario.toJSON().clave === clave){
            throw new Error('No puedes poner tu misma clave');
        }
    }), */
    validatorCampos
] ,updateUsuarioController);

module.exports = router;