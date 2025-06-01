
let tasks = ["Ilove JavaScript", "A to-do list"]; 
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function Tasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = task;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeTask(index);

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
  });
}


function addTask(event) {
  event.preventDefault();
  const newTask = todoInput.value.trim();
  if (newTask) {
    tasks.push(newTask);
    todoInput.value = '';
    Tasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  Tasks();
}


todoForm.addEventListener('submit', addTask);


Tasks();