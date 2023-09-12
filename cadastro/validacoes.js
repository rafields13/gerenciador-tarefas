// Declarando as varáveis globais

let nome_usuario_valor = document.getElementById('iusuario');
let email_valor = document.getElementById('iemail');
let senha_valor = document.getElementById('isenha');
let confirmar_senha_valor = document.getElementById('iconfirmarsenha'); 
let botao_cadastro = document.getElementById('botao_cadastro');
var return_nome_usuario;
var return_email;
var senha;
var return_senha;
var return_confirmar_senha;

nome_usuario_valor.addEventListener('input', function() {
    if (this.value.length == 0) {
        // Mostre o erro de preencher o campo
        
        return_nome_usuario =  false;
    } else if (this.value.length < 3 || this.value.length > 16) {
        // Mostre o erro de que precisa estar entre 3 e 16 caracteres

        return_nome_usuario =  false;
    } else if (this.value.indexOf(' ') !== -1) {
        // Mostre o erro de que contém espaços em branco

        return_nome_usuario =  false;
    } else {
        return_nome_usuario = true;
    }

    habilitar_botao();
});

email_valor.addEventListener('input', function() {
    if (this.value.length == 0) {
        // Mostre o erro de preencher o campo

        return_email = false;
    } else if (this.value.indexOf('@') === -1) {
        // Mostre o erro de que precise ter @

        return_email = false;
    } else if (this.value.indexOf(' ') == (this.value.indexOf('@')) + 1) {
        // Mostre o erro de que depois do @ está em branco *OBS -> ORGANIZAR LÓGICA ERRADA!

        console.log('erro de espaco em branco depois do @');

        return_email = false;
    } else {
        return_email = true;
    }

    habilitar_botao();
});

senha_valor.addEventListener('input', function() {
    senha = this.value;

    if (this.value.length == 0) {
        // Mostre o erro de preencher o campo

        return_senha = false;
    } else if (this.value.length < 8 || this.value.length > 20) {
        // Mostre o erro de que precisa estar entre 8 e 20 caracteres

        return_senha = false;
    } else if (this.value.indexOf(' ') !== -1) {
        // Mostre o erro de que contém espaços em branco

        return_senha = false;
    } else {
        return_senha = true;
    }

    habilitar_botao();
});

confirmar_senha_valor.addEventListener('input', function() {
    if (senha !== this.value) {
        // Mostre o erro de que estão diferentes

        return_confirmar_senha = false;
    } else {
        return_confirmar_senha = true;
    }

    habilitar_botao();
});

 let habilitar_botao = () => {
    console.log(return_nome_usuario);
    console.log(return_email);
    console.log(return_senha);
    console.log(return_confirmar_senha);

    if (return_nome_usuario === true && return_email === true && return_senha === true && return_confirmar_senha === true) {
        botao_cadastro.classList.add('botao_cadastro');

        botao_cadastro.removeAttribute("disabled");

        console.log('if');
    } else {
        botao_cadastro.classList.remove('botao_cadastro');

        console.log('else');
    }
}