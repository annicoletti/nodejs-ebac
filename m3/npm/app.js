const express = require('express')
const path = require('path') //padrão do node para navvegar entre os arquivos

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');

const app = express();
const porta = 3000;

//configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routers
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});