const express = require('express');
const { Pedido } = require('../models');

const router = express.Router();

//usando o ejs para renderizar views
router.get('/', (_, res) => {
    Pedido.find({}).then((pedidos) => {
        res.render('pedidos/index', {
            nomeDoUsuario: "André Nicoletti",
            pedidos: pedidos,
        });
    });
});

module.exports = router;