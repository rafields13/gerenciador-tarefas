// Declarando as varáveis globais

const nome_usuario = document.getElementById('iusuario').value;
const email = document.getElementById('iemail').value;
const senha = document.getElementById('isenha').value;
const confirmar_senhar = document.getElementById('iconfirmarsenha').value; 

function validar_nome_usuario() {
    if (nome_usuario.length == 0) {
        // Mostre o erro de preencher o campo
        return false;
    } else if (nome_usuario.length < 3 || nome_usuario.length > 16) {
        // Mostre o erro de que precisa estar entre 3 e 16 caracteres
        return false;
    } else if (nome_usuario.indexOf(' ') !== -1) {
        // Mostre o erro de que contém espaços em branco
        return false;
    } else {
        return true;
    }
}

function validar_email() {
    if (email.length == 0) {
        // Mostre o erro de preencher o campo
        return false;
    } else if (email.indexOf('@') === -1) {
        // Mostre o erro de que precise ter @
        return false;
    } else if (email.indexOf(' ') === email.indexOf('@') + 1) {
        // Mostre o erro de que depois do @ está em branco
        return false;
    } else {
        return true;
    }
}

function validar_senha() {
    if (senha.length == 0) {
        // Mostre o erro de preencher o campo
        return false;
    } else if (senha.length < 8 || senha.length > 20) {
        // Mostre o erro de que precisa estar entre 8 e 20 caracteres
        return false;
    } else if (senha.indexOf(' ') !== -1) {
        // Mostre o erro de que contém espaços em branco
        return false;
    } else {
        return true;
    }
}

function validar_confirmar_senha() {
    if (senha !== confirmar_senhar) {
        // Mostre o erro de que estão diferentes
        return false;
    } else {
        return true;
    }
}

function habilitar_botao() {
    const resultados = [validar_nome_usuario(), validar_email(), validar_senha(), validar_confirmar_senha()];
    
    if (resultados[0] === true && resultados[1] === true && resultados[2] === true && resultados[3]=== true) {
        // Habilite o botão
    }
}