const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<form  method="POST">Nom: <input type="text" name="nom"><br><input type="submit" value="Send"></form>');
})

app.post("/hola", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({
        msg: "Hola " + req.body.name
    }, null, 2));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})