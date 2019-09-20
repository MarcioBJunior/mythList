var list = document.querySelector('#app ul');
var input = document.querySelector('#input');
var button = document.querySelector('.myButton');

var todos = [];

function idGenerator(){
    let timestamp = new Date();
    let id = timestamp.getHours().toString() + 
    timestamp.getMinutes().toString() + 
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();

    return id;
}


function add(){
    
    let taskdesc = input.value;

    let task = {
        id:idGenerator(),
        data: {
            desc: taskdesc
        }
    }

    
    if (taskdesc== '' || taskdesc.length > 40){
        alert("O campo está vazio! Ou passou do limite de caracter, Preencha o campo e tente novamente!");
    }else{
        //todos.push(text);
        addTask(task);
        input.value = '';
        renderList();
    }
    
}

button.onclick = add;


function renderList (){
    //Limpar a lista ao redenterizar
    list.innerHTML = '';

 for( todo of todos){
    
     var todoElement = document.createElement('li');
     var todoText = document.createTextNode(todo.data.desc);
     
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
//renderList();



function deleteTodo(pos){
    
    //deleteTodo(pos, 1);
    //renderList();
}

dataRefresh( function(snapshot){
    todos = [];
    snapshot.forEach(doc => {
        todos.push(doc.data());
    })
    renderList();
})