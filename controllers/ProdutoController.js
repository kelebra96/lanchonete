const fs = require("fs");
const Produto = require("../models/Produto");

exports.index = (req, res) => {
  res.render("produto/cadastroproduto");
};

exports.create = async (req, res) => {
  try {
    const { name, price, ingredients } = req.body;

    if (!req.file) {
      throw new Error("Arquivo não enviado");
    }
     

    const relativePath = `\\uploads\\${req.file.filename}`;
    const file = req.file;
    const produto = new Produto({
      name,
      price,
      ingredients,
      src: relativePath, // Use o caminho relativo aqui
    });

    await produto.save();
    res.redirect("/produto");
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." + err });
    console.log(err);
  }
};


exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.src);
    await picture.remove();
    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.render("cardapio", { prod: produtos });
    console.log(produtos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
};
