import { MongoClient } from "mongodb";
import "dotenv/config";

const cliente = new MongoClient(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER_ID}`);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db(process.env.DATABASE);
  documentosColecao = db.collection(process.env.COLLECTION);

  console.log("Conectado ao banco de dados com sucesso");

} catch (error) {
  console.log(error);
}

export { documentosColecao };