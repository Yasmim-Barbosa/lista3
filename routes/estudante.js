const express = require("express");
const router = express.Router();

let estudantes = [];

// GET: Listar todos os estudantes
router.get("/", (req, res) => {
  res.json(estudantes);
});

// POST: Adicionar um novo estudante
router.post("/", (req, res) => {
  const estudante = req.body;
  estudantes.push(estudante);
  res.status(201).json(estudante);
});

// PUT: Atualizar um estudante
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = estudantes.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    estudantes[index] = req.body;
    res.json(estudantes[index]);
  } else {
    res.status(404).send("Estudante não encontrado");
  }
});

// DELETE: Remover um estudante
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = estudantes.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    estudantes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Estudante não encontrado");
  }
});

module.exports = router;
