const router = require('express').Router();


router.get('/cardapio', (req, res) => {
    res.render('cardapio');
});


module.exports = router;