// import { MongoClient } from "mongodb";
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import DBActions from "./DBActions.js";


const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.text({ type: 'text/*' })); // Bez tej linii nie działa

const PORT = 8080;
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.get('/products', async (req, res) => {
  try {
    const database = new DBActions();
    const data = await database.connectAndGetData();
    res.send(data);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    res.status(500).send("Wystąpił błąd podczas przetwarzania zapytania.");
  }
});


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});