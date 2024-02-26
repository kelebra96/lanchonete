const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    ingredients: { type: String, required: true },
    src: { type: String},
});

module.exports = mongoose.model("Produto", ProdutoSchema);
