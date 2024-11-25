// Importar a biblioteca express
const express = require("express");

// Configuração de acesso ao servidor
const localhost = "127.0.0.1";
const port = 5000;

// Criação do aplicativo servidor
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Importar as configurações de rotas
const professoresRotas = require("./routes/professores");
const estudantesRotas = require("./routes/estudantes");

// Rota raiz do servidor
app.get("/", (req, res) => {
  res.send("Você acessou a raiz do servidor web.");
});

// Configurar as rotas para professores e estudantes
app.use("/professores", professoresRotas);
app.use("/estudantes", estudantesRotas);

// Rodar o servidor
app.listen(port, localhost, () => {
  console.log(`O servidor está rodando em http://${localhost}:${port}`);
});
