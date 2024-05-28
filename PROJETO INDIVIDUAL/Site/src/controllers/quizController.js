var quizModel = require("../models/quizModel");


function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz.html
    var fase1 = req.body.fase1Server;
    var fase2 = req.body.fase2Server;
    var total = req.body.totalServer;
    var usuarioId = req.body.usuarioIdServer;

    // Faça as validações dos valores
    if (fase1 == undefined) {
        res.status(400).send("Sua fase1 está undefined!");
    } else if (fase2 == undefined) {
        res.status(400).send("Sua fase2 está undefined!");
    } else if (total == undefined) {
        res.status(400).send("Seu total está undefined!");
    } else if (usuarioId == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.enviar(fase1, fase2, total, usuarioId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o erro Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviar
}