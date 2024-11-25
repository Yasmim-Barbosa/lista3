const express = require("express");
const router = express.Router();

let professores = [];

// GET: Listar todos os professores
router.get("/", (req, res) => {
  res.json(professores);
});

// POST: Adicionar um novo professor
router.post("/", (req, res) => {
  const professor = req.body;
  professores.push(professor);
  res.status(201).json(professor);
});

// PUT: Atualizar um professor
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = professores.findIndex((p) => p.id === parseInt(id));
  if (index !== -1) {
    professores[index] = req.body;
    res.json(professores[index]);
  } else {
    res.status(404).send("Professor não encontrado");
  }
});

// DELETE: Remover um professor
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = professores.findIndex((p) => p.id === parseInt(id));
  if (index !== -1) {
    professores.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Professor não encontrado");
  }
});

module.exports = router;
