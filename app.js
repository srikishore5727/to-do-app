const button = document.querySelector("#button");
const input = document.querySelector("#input");
const todolistParent = document.querySelector("#todolist")
let todoList = []

button.addEventListener("click",addFunc);

// adding the user input
function addFunc(){
    if(input.value.length!==0){
        todoList.push(input.value);
        input.value = null;
        appendList();
    }
}


function appendList(){
    todolistParent.innerHTML = null;
    todoList.forEach((el,ind)=>{
        todolistParent.innerHTML += `<li>${el} <a onClick=editList(${ind})>Edit</a> <a onClick=deleteList(${ind})>X &nbsp |</a></li>`;
    });
}


function editList (index){

    let value = prompt();
    if(value==""){
        appendList();
    }else if(value==cancel){
        appendList();
    }
    else{
    todoList[index]= value;
    todoList.splice(index,1,value);
    appendList();}
}

// delete the element from the todolist
function deleteList(index){
    todoList.splice(index,1);
    appendList();
}