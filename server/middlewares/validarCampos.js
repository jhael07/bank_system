const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {
    //VALIDAMOS SI EXISTE ALGUN ERROR//
    const isError = validationResult(req);
    if (!isError.isEmpty()) {
        return res.status(400).json({ isError })
    }
    next();
}

module.exports = {
    validarCampos
}