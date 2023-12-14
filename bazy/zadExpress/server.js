import { MongoClient } from "mongodb"

export default class DBActions {

  constructor() {
    const ipAdress = "127.0.0.1";
    const port = "27017";
    const databaseName = "sample_training";
    
    const connectionString = `mongodb://${ipAdress}:${port}/${databaseName}`;
    this.client = new MongoClient(connectionString);
    this.conn = null;
  }
  
  
  async connectAndGetData() {
    try {
      this.conn = await client.connect();
      console.log("Połączono z bazą danych");
      await this.getAllData(); 
    } catch (e) {
      console.error("Błąd połączenia z bazą danych:", e);
      throw e; 
    } finally {
      conn && conn.close();
    }
  }
  
  async getAllData() {
    try {
      const collection = conn.db('magazyn').collection("data");
      const queryResult = await collection.find({}).toArray();
      return queryResult;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  }
}