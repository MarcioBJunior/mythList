var list = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Ir para Faculdade'
];

function renderList (){
    //Limpar a lista ao redenterizar
    list.innerHTML = '';
 for( todo of todos){
     var todoElement = document.createElement('li');
     var todoText = document.createTextNode(todo);
     
     //CRIAR EXCLUIR
     var link = document.createElement('a');
     link.setAttribute('href', '#');
     var linkText = document.createTextNode('Excluir');
     link.appendChild(linkText);
     
     //Achar posição do elemento texto na lista para excluir
     var pos = todos.indexOf(todo);
     link.setAttribute('onclick', 'deleteTodo('+pos+')');
     //Adicionar Elementos a Lista ( Texto e Excluir)
     todoElement.appendChild(todoText);
     todoElement.appendChild(link);
     list.appendChild(todoElement);
 }
}
renderList();


function addTodo(){
    var text = input.value;
    
    if (text== '' || text.length > 20){
        alert("O campo está vazio! Ou passou do limite de caracter, Preencha o campo e tente novamente!");
    }else{
        todos.push(text);
        input.value = '';
        renderList();
    }
    
}

button.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderList();
}