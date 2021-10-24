const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

router.post('/',
 //Validar datos
 [
   check('nombre','El nombre es Obligatorio').not().isEmpty(),
   check('email', 'Agrega un email válido').isEmail(),
   check('password', 'El password debe ser al menos de 6 caracteres').isLength({min: 6}),
 ],
  usuarioController.nuevoUsuario
);

module.exports = router;
