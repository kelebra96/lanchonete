const mongoose = require('mongoose');


const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingrediente: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Produto', ProdutoSchema);