const express = require('express');

const router = express.Router();

// router.get('/', (_, res) => {
//     res.send("Tela raiz de pedidos!");
// });

//usando o ejs para renderizar views
router.get('/', (_, res) => {
    res.render('pedidos/index', {
        nomeDoUsuario: "André Nicoletti",
    });
});


module.exports = router;