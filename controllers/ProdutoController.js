const router = require('express').Router();



router.get('/cadastro', (req, res) => {
    res.render('produto/cadastroproduto');

})

router.post('/cadastroproduto', (req, res) => {
    const { nome, preco, image, ingrediente } = req.body;
    console.log(nome, preco, image, ingrediente);    

    
    

})

module.exports = router;   