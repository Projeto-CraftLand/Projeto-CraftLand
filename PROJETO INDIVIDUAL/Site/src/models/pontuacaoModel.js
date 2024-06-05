var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT 
    fase1 as fase1,
    fase2 as fase2,
    total as total,
    (select round(avg(total),2) from pontuacao)media
                FROM pontuacao
                    WHERE fkUsuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 1 `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
