// import { MongoClient } from "mongodb";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import DBActions from "./DBActions.js";


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.text({ type: 'text/*' })); // Bez tej linii nie działa
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 8080;
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.get('/products', async (req, res) => {
  try {
    const database = new DBActions();
    const data = await database.getAllData();
    res.send(data);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    res.status(500).send("Wystąpił błąd podczas przetwarzania zapytania.");
  }
});


app.post('/products', async (req, res)=> {
  try {
    const data = req.body;
    const database = new DBActions();

    const isProductInDB = await database.checkIfNameInDB(data["name"])
    if (isProductInDB == true) {
      res.send("Nie dodano produktu do bazy danychn\nProdukt o podanej nazwie już istnieje");
    } else {
      await database.insertJSON(data);
      res.send("Pomyślnie dodano dane do bazy")
    }

  } catch (error) {
    console.error("Błąd podczas wsadzania danych", error);
    res.status(500).send("Wystąpił błąd podczas przetwarzania zapytania.");
  }
})


app.delete('/products/:id', async (req, res) => {
  try {
    const productID = req.params.id;
    const database = new DBActions();
    const result = await database.deleteById(productID);
    res.send(result)
  } catch (error) {
    console.log("Bład podczas usówania danych")
    res.status(500).send("Wystąpił błąd podczas usówania danychc")
  }
})


app.put('/products/:id', async (req, res)=> {
  try {
    const id = req.params.id;
    const data = req.body;
    const database = new DBActions();
    const result = await database.modify(id, data);
    res.send(result) 
  } catch (error) {
    console.log("Wystąpił błąd podczas modyfikacji danych")
    res.status(500).send("Wystąpił błąd podczas modyfikacji danych")
  }
})


app.get('/products/report', async (req, res) => {
  try {
    const database = new DBActions();
    const report = await database.generateReport();
    res.send(report);
  } catch (error) {
    console.log("Nie udało się wygenerować raportu")
    res.status(500).send("Nie udało się wygenerowac raportu")
  }
})



app.listen(PORT, () => {
  console.log(`Server running at: http://130.61.179.107:${PORT}/`);
});