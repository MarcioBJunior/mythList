var login = document.querySelector('#inColle');
var btnEntrar = document.querySelector('.btnEntrar');
var collec = '';

btnEntrar.onclick = logar;

function logar() {

    collec = login.value;

    if (collec === '' || collec.length > 40) {
        alert("O campo está vazio! Ou passou do limite de caracter, Preencha o campo e tente novamente!");
    } else {
        
        window.location.href = "tarefas.html";
       
    }
}


