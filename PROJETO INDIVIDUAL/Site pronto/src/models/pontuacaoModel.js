var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        fase1 as fase1,
        fase2 as fase2,
                    FROM pontuacao
                    WHERE fkUsuario = ${idUsuario}
                    ORDER BY id DESC LIMIT ${limite_linhas} `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
