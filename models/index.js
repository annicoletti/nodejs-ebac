const mongoose = require('mongoose');
const PedidoSchema = require('./pedido');
const PerfilSchema = require('./perfil');

const Pedido = mongoose.model('Pedido', PedidoSchema);
const Perfil = mongoose.model('Perfil', PerfilSchema);

const mongoURI = 'mongodb://localhost:27017/ebacpizza';
// const mongoURI = 'mongodb://admin:123456@localhost:27017/ebacpizza';

const connect = () => {
    mongoose.connect(mongoURI);
}

module.exports = {
    connect,
    Pedido,
    Perfil,
}