import { MongoClient } from "mongodb";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const ObjectId = require('mongodb').ObjectId;

export default class DBActions {
  constructor() {
    const ipAdress = "127.0.0.1";
    const port = "27017";
    const databaseName = "magazyn";
    const connectionString = `mongodb://${ipAdress}:${port}/${databaseName}`;
    this.client = new MongoClient(connectionString);
    this.conn = null;
  }

  async getAllData() {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db("magazyn").collection("products");
      const queryResult = await collection.find({}).toArray();
      return queryResult;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }

  async insertJSON(data) {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db("magazyn").collection("products");
      await collection.insertOne(data);
    } catch (error) {
      console.error("Błąd podczas insertu danych:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }

  async checkIfNameInDB(name) {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db("magazyn").collection("products");
      const productInfo = await collection.findOne({ name: name });
      if (productInfo == null) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("Błąd podczas sprawdzania obecności nazwy w bazie:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }

  async deleteById(id) {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db("magazyn").collection("products");
      const res = await collection.deleteOne({_id: new ObjectId(id)})
      return (res["deletedCount"] == 1) ? "Udało się usunąć produkt" : "Nie udało się usunąć produktu"
    } catch (error) {
      console.log("Błąd podczas usówania danych", error)
      return error
    } finally {
      this.conn && this.conn.close();
    }
  }

  async modify(id, data) {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db("magazyn").collection("products");
      const res = await collection.updateOne({_id: new ObjectId(id)}, {$set: data })
      console.log(res)
      return (res["modifiedCount"] != 0) ? "Udało się zmodyfikować produkt" : "Nie udało się zmodyfikować produktu"
    } catch (error) {
      console.log("Błąd podczas usówania danych", error)
      return error
    } finally {
      this.conn && this.conn.close();
    }
  }
}
