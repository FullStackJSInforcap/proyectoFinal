const { Router } = require('express');
const { findAllClienteController, findByIdClienteController, createClienteController, updateClienteController, deleteByIdClienteController } = require('../controllers/cliente');

const router = Router();

router.get('', findAllClienteController);

router.get('/:id', findByIdClienteController);

router.post('', createClienteController);

router.put('', updateClienteController);

router.delete('/:id', deleteByIdClienteController);

module.exports = router;