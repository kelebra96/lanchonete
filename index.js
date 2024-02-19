const express = require('express');
const app = express();
const port = 80

//File Static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


//Controllers
const HomeController = require('./controllers/HomeController');
const CardapioController = require('./controllers/CardapioController');
const ProdutoController = require('./controllers/ProdutoController');
//Rotas
app.use('/', HomeController);
app.use('/', CardapioController);
app.use('/', ProdutoController);







app.listen(port, () => {
    console.log(`Servidor Web rodando na porta ${port}`)
});