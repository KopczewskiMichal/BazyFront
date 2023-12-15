import { MongoClient } from "mongodb"

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
      const collection = this.conn.db('magazyn').collection("data");
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
      const collection = this.conn.db('magazyn').collection("data");
      await collection.insertOne(data);
    } catch (error) {
      console.error("Błąd podczas insertu danych:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }


  async checkIfNameInDB (name) {
    try {
      this.conn = await this.client.connect();
      const collection = this.conn.db('magazyn').collection("data");
      const productInfo = await collection.findOne({name: name});
      if (productInfo == null) {
        return false
      } else {
        return true
      }
    } catch (error) {
      console.error("Błąd podczas sprawdzania obecności nazwy w bazie:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }
}

