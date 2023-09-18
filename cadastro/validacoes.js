// Declarando as varáveis globais
let nome_usuario = document.getElementById("iusuario");
let email = document.getElementById("iemail");
let senha_valor = document.getElementById("isenha");
let confirmar_senha = document.getElementById("iconfirmarsenha");
let botao_cadastro = document.getElementById("botao_cadastro");
let msg_erro_nome_usuario = document.getElementById("msg_erro_nome_usuario");
let msg_erro_email = document.getElementById("msg_erro_email");
let msg_erro_senha = document.getElementById("msg_erro_senha");
let msg_erro_confirmar_senha = document.getElementById("msg_erro_confirmar_senha");
var return_nome_usuario;
var return_email;
var senha;
var return_senha;
var return_confirmar_senha;

nome_usuario.addEventListener("input", function () {
    if (this.value.length === 0) {
        msg_erro_nome_usuario.setAttribute("style", "display: none");
        msg_erro_nome_usuario.classList.remove("msg_erro");
    } else if (this.value.length < 3 || this.value.length > 16) {
        // Mostre o erro de que precisa estar entre 3 e 16 caracteres
        msg_erro_nome_usuario.removeAttribute("style");
        msg_erro_nome_usuario.classList.add("msg_erro");
        msg_erro_nome_usuario.innerHTML = 'O campo "nome de usuário" deve conter entre 3 e 16 caracteres.';

        return_nome_usuario = false;
    } else if (this.value.indexOf(" ") !== -1) {
        // Mostre o erro de que contém espaços em branco
        msg_erro_nome_usuario.removeAttribute("style");
        msg_erro_nome_usuario.classList.add("msg_erro");
        msg_erro_nome_usuario.innerHTML = 'O campo "nome de usuário" não pode conter espaços em branco.';

        return_nome_usuario = false;
    } else {
        msg_erro_nome_usuario.setAttribute("style", "display: none");
        msg_erro_nome_usuario.classList.remove("msg_erro");

        return_nome_usuario = true;
    }

    habilitar_botao();
});

email.addEventListener("input", function () {
    // Verifica se há algo escrito após o "@"
    var regex = /@.+/;

    if (this.value.length === 0) {
        msg_erro_email.setAttribute("style", "display: none");
        msg_erro_email.classList.remove("msg_erro");
    } else if (this.value.indexOf("@") === -1) {
        // Mostre o erro de que precise ter @
        msg_erro_email.removeAttribute("style");
        msg_erro_email.classList.add("msg_erro");
        msg_erro_email.innerHTML = 'O campo "email" deve conter um "@".';

        return_email = false;
    } else if (!regex.test(this.value)) {
        // Mostre o erro de que depois do @ está em branco
        msg_erro_email.removeAttribute("style");
        msg_erro_email.classList.add("msg_erro");
        msg_erro_email.innerHTML = 'O campo "email" não contém nada após o "@".';

        return_email = false;
    } else {
        msg_erro_email.setAttribute("style", "display: none");
        msg_erro_email.classList.remove("msg_erro");

        return_email = true;
    }

    habilitar_botao();
});

senha_valor.addEventListener("input", function () {
    senha = this.value;

    if (this.value.length === 0) {
        msg_erro_senha.setAttribute("style", "display: none");
        msg_erro_senha.classList.remove("msg_erro");
    } else if (this.value.length < 8 || this.value.length > 20) {
        // Mostre o erro de que precisa estar entre 8 e 20 caracteres
        msg_erro_senha.removeAttribute("style");
        msg_erro_senha.classList.add("msg_erro");
        msg_erro_senha.innerHTML = 'O campo "senha" deve ser preenchido com um número entre 8 e 20 caracteres.';

        return_senha = false;
    } else if (this.value.indexOf(" ") !== -1) {
        // Mostre o erro de que contém espaços em branco
        msg_erro_senha.removeAttribute("style");
        msg_erro_senha.classList.add("msg_erro");
        msg_erro_senha.innerHTML = 'O campo "senha" contém espaços em branco.';

        return_senha = false;
    } else {
        msg_erro_senha.setAttribute("style", "display: none");
        msg_erro_senha.classList.remove("msg_erro");

        return_senha = true;
    }

    habilitar_botao();
});

confirmar_senha.addEventListener("input", function () {
    if (this.value.length === 0) {
        msg_erro_confirmar_senha.setAttribute("style", "display: none");
        msg_erro_confirmar_senha.classList.remove("msg_erro");
    } else if (senha !== this.value) {
        // Mostre o erro de que estão diferentes
        msg_erro_confirmar_senha.removeAttribute("style");
        msg_erro_confirmar_senha.classList.add("msg_erro");
        msg_erro_confirmar_senha.innerHTML = 'A senha no campo "confirmar senha" está diferente da senha do campo "senha".';

        return_confirmar_senha = false;
    } else {
        msg_erro_confirmar_senha.setAttribute("style", "display: none");
        msg_erro_confirmar_senha.classList.remove("msg_erro");

        return_confirmar_senha = true;
    }

    habilitar_botao();
});

let habilitar_botao = () => {
    if (return_nome_usuario === true && return_email === true && return_senha === true && return_confirmar_senha === true) {
        botao_cadastro.classList.add("botao_cadastro");
        botao_cadastro.removeAttribute("disabled");
    } else {
        botao_cadastro.classList.remove("botao_cadastro");
    }
};
