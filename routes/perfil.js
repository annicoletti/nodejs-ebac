const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nomeDoUsuario: "André Nicoletti",
    });
});


module.exports = router;