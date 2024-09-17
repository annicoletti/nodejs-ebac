const express = require('express');
const { Perfil } = require('../models');

const router = express.Router();


router.get('/', (_, res) => {
    Perfil.find({}).then((result) => {
        console.log("🚀 ~ Perfil.find ~ result:", result)
        res.render('perfil/index', {
            perfis: result,
        });
    });
});


module.exports = router;