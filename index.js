const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 5000


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<form  method="POST">Nom: <input type="text" name="nom"><br><input type="submit" value="login"></form>');
})

app.post("/", (req, res) => {
	var nom = req.body.nom;
    res.send("Hola " + nom);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})