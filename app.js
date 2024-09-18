const express = require('express')
const path = require('path') //padrão do node para navvegar entre os arquivos

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfil = require('./routes/perfil');
const { connect } = require('./models');

const app = express();
const porta = 3000;

//configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configurando pasta publica
app.use(express.static(path.join(__dirname, 'public')));

//routers
app.use('/pedidos', routerPedidos);
app.use('/perfil', routerPerfil);
app.use('/', routerPrincipal);

app.listen(porta, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${porta}`);
});