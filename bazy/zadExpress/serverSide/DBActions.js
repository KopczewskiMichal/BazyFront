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
      console.log("tutaj się odpa;a")
      const collection = this.conn.db('magazyn').collection("data");
      const queryResult = await collection.find({}).toArray();
      return queryResult;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    } finally {
      this.conn && this.conn.close();
    }
  }
  


}

