var list = document.querySelector('#app');
var input = document.querySelector('#input');
var button = document.querySelector('.myButton');
var title = document.querySelector('#title');

var todos = [];

     var titulo = document.createTextNode('Tarefas da lista: '+ collec);
     title.appendChild(titulo);

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
    
     var todoElement = document.createElement('div');
     todoElement.classList.add("card")
     var todoText = document.createTextNode(todo.task.data.desc);
     
     //CRIAR EXCLUIR
     var link = document.createElement('a');
     link.setAttribute('href', '#');
     var linkText = document.createTextNode('X');
     link.appendChild(linkText);
     var br = document.createElement('br');
     
     //Achar posição do elemento texto na lista para excluir
     var pos = todos.indexOf(todo);
     
     console.log(pos);
     link.setAttribute('onclick', 'deleteTodo('+pos+')');
     //Adicionar Elementos a Lista ( Texto e Excluir)
     todoElement.appendChild(link);
     todoElement.appendChild(br);
     todoElement.appendChild(todoText);
     list.appendChild(todoElement);
 }
}




function deleteTodo(pos){

    for(task of todos ){
           
        if(todos.indexOf(task) == pos){
            removeTask(task);
        }else{
            console.log("ELSE"); 
        }
    }
    
}

dataRefresh( function(snapshot){
    todos = [];

    snapshot.forEach(doc => {
        todos.push(doc.data());
    })

    renderList();

})