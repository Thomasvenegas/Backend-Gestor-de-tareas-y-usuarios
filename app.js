const express = require("express");
const app = express();
const port = 3000;

const url = `http://localhost:${port}/api`;

app.get("/api", (req, res) => {
  res.send("Servidor Funcionando");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${url}`);
});
