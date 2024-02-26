const express = require("express");
const router = express.Router();
const upload = require("../services/multer");
const ProdutoController = require("../controllers/produtoController");

router.get("/produto", ProdutoController.index);
router.post("/createproduct", upload.single("src"), ProdutoController.create);
router.get("/", ProdutoController.findAll);
router.delete("/:id", ProdutoController.remove);

module.exports = router;
