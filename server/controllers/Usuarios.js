const bcrypt = require('bcryptjs');
//const Usuario = require('../models/Usuario');

//LOGEAR USUARIO//
const loginPOST = () => async (req, res) => {
    const { user, pass } = req.body;
    const userpass='$2a$10$ITgSNzqQ3UAtVsqlQZxFvuYWv04yCPy3W7.ik02ZrJLDseqYEBcv2';
    /*TODO:
        -Buscar usuario en la BD 
        -Recibir el hash(userpass)
    */
    //COMPARE HASH//
    const valid =  bcrypt.compareSync(pass, userpass,  (err, res)=> {
        // res === true
        return res;
    });

    valid ? res.json({valid}) : res.json({valid})

}

//REGISTRAR USUARIO//
const registerPOST = () => async (req, res) => {
    const { user, pass } = req.body;
    /*TODO: 
        -Validar que el usuario no exista en la BD
        -Registrar el usuario en la BD
    */

    //GENERATE HASH//
    const salt = bcrypt.genSaltSync();
    const password = await bcrypt.hash(pass, salt);

    res.json({ user, creationDate: new Date() });

}


module.exports = {
    loginPOST,
    registerPOST
}