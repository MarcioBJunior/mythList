var login = document.querySelector('#inColle');
var btnEntrar = document.querySelector('.btnEntrar');

btnEntrar.addEventListener("click", logar);

function logar() {

    if (login.value === '' || login.value.length > 40) {
        alert("O campo está vazio! Ou passou do limite de caracter, Preencha o campo e tente novamente!");
    } else {
        //Chamando a página passando um valor
        
        window.location = "tarefas.html?collec="+login.value;
       
    }
}


