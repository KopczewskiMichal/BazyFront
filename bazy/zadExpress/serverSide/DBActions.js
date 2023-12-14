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
  
  
  async connectAndGetData() {
    try {
      this.conn = await this.client.connect();
      return await this.getAllData(); 
    } catch (e) {
      throw e; 
    } finally {
      this.conn && this.conn.close();
    }
  }
  

  async getAllData() {
    try {
      const collection = this.conn.db('magazyn').collection("data");
      const queryResult = await collection.find({}).toArray();
      return queryResult;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  }
}

