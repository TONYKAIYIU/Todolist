console.log("Script Loaded");

//1. Assgin variables to DOM elements
let addTaskButton = document.getElementById("add-button")
let newTaskInput = document.getElementById("task-input")
let todoContainer = document.getElementById("todo-list")
let templateElement = document.getElementById("todo-item-template")
let template = templateElement.innerHTML


//2. Write function to handle the events
function onAddTaskClicked(event){
    // Get the contents of the input box
    let taskName = newTaskInput.value;
    //clear the input box
    newTaskInput.value = ""

    // Search and replace to add task name (found above)
    let todoHTML = template.replace("<!-- TASK_NAME -->", taskName)

    //We have the formatted HTML, lets insert it into the todo container
    todoContainer.insertAdjacentHTML("afterbegin", todoHTML)
}

function onTodoClicked(event){
    let targetElement = event.target;

    while(!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}


//3. Link element, event to the function
addTaskButton.addEventListener('click',onAddTaskClicked)
todoContainer.addEventListener('click', onTodoClicked)