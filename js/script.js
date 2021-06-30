// NAMING ELEMNENT
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoItem = document.querySelector(".todo-item");
const todoList = todoItem.children;

// EVENT LISTENER
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo);
todoItem.addEventListener("click", deleteCheck);
// FUNCTION
function addTodo(event){
    event.preventDefault();
    
    // creating newDiv 
    const todoList = document.createElement("div");
    todoList.classList.add("todo");
    
    
    // Creating complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML ='<i class=" fa fa-check"><i>';
    completeButton.classList.add("complete-button");
    todoList.appendChild(completeButton);

    // creating list item
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    todoList.appendChild(listItem);
    // Creating complete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML ='<i class=" fas fa-trash"><i>';
    trashButton.classList.add("trash-button");
    todoList.appendChild(trashButton);

    if( todoInput.value == ""|| todoInput.value == " "){
        console.log("cant add")
    }else{
         //ADD TO LOCALSTORAGE
        saveLocalTodos(todoInput.value);
        listItem.innerText = todoInput.value;
        todoItem.appendChild(todoList);
       
    }
    todoInput.value=" ";
}

function deleteCheck(e){
    const item = e.target;
    // console.log(item)
    // DELETE BTN
    if(item.classList[0] === 'trash-button'){
        const todoInput = item.parentElement;
        todoInput.classList.add("fall");
        removeLocalTodos(todos);
        todoInput.addEventListener("transitionend", function(){
            todoInput.remove();
        });
        
    }

    // COMPLETED
    if(item.classList[0] === 'complete-button'){
        const todoInput = item.parentElement;
        todoInput.classList.toggle("completed");  
    }
}


function saveLocalTodos(todos){
    // check todo
    let todo;
    if(localStorage.getItem('todo') === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
    todo.push(todos);
    localStorage.setItem("todo", JSON.stringify(todo));

}
function getTodos(){
    // check todo
    let todo;
    if(localStorage.getItem('todo') === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
    todo.forEach(function(todo){
  // creating newDiv 
  const todoList = document.createElement("div");
  todoList.classList.add("todo");
  
  
  // Creating complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML ='<i class=" fa fa-check"><i>';
  completeButton.classList.add("complete-button");
  todoList.appendChild(completeButton);

  // creating list item
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  todoList.appendChild(listItem);
  // Creating complete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML ='<i class=" fas fa-trash"><i>';
  trashButton.classList.add("trash-button");
  todoList.appendChild(trashButton);

      listItem.innerText = todo;
      todoItem.appendChild(todoList);
     
  
    })

}
function removeLocalTodos(){
     // check todo
     let todo;
     if(localStorage.getItem('todo') === null){
         todo = [];
     }else{
         todo = JSON.parse(localStorage.getItem('todo'));
     }
     const todosIndex = todos.children[0].innerText;
     todo.splice(todo.indexOf(todosIndex), 1);
     localStorage.setItem('todo', JSON.stringify(todo));
}