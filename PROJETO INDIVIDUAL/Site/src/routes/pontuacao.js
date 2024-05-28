var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.get("/ultimas/:idUsuario", function (req, res) {
    pontuacaoController.buscarUltimasMedidas(req, res);
});

module.exports = router;