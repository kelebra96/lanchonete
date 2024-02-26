const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.usl9j83.mongodb.net/?retryWrites=true&w=majority`
  );

  console.log("Conectado com sucesso ao MongoDb Atlas!");
}

module.exports = main;
