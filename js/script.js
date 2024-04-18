console.log("Scropt Loaded");

//1. Assgin variables to DOM elements
let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoContainer = document.getElementById("todo-list");

//2. Write function to handle the events
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = ""
    todoContainer.insertAdjacentHTML("afterbegin", taskName) 
}

//3. Link element, event to the function
addTaskButton.addEventListener('click',onAddTaskClicked)