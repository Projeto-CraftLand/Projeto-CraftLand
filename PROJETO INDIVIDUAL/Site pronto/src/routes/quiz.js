var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função enviar de quizController.js
router.post("/enviar", function (req, res) {
    quizController.enviar(req, res);
});

module.exports = router;