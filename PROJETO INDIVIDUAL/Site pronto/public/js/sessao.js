// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_idusuario = document.getElementById("b_idusuario");

    if (email != null && nome != null && idUsuario != null) {
        b_usuario.innerHTML = nome;
        b_idusuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}


