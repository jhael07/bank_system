const { Router } = require('express');
const { loginPOST, registerPOST } = require('../controllers/Usuarios');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

//RUTAS DE LOS USUARIOS//
//router.get('/', usuariosGet());

//RUTA DE LOGIN//
router.post('/login', [
    //MIDDLEWARE VALIDATIONS//
    check('user', 'El usuario es obligatorio').not().isEmpty(),
    check('pass', 'El pass no puede estar vacio').not().isEmpty(),
    validarCampos//Ejecutamos la funcion para retornar los errores//

], loginPOST());

//RUTA DE REGISTRO//
router.post('/register', [
    //MIDDLEWARE VALIDATIONS//
    check('user', 'El usuario es obligatorio').not().isEmpty(),
    check('pass', 'El pass no puede estar vacio').not().isEmpty(),
    validarCampos //Ejecutamos la funcion para retornar los errores//

], registerPOST());

module.exports = router;