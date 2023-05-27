document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    toDoList(event.target["new-task-description"].value);
    event.preventDefault();
    form.reset();
  })
}) 

  function toDoList(todo) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.addEventListener('click', deleteToDo);
    button.textContent = 'x';
    li.textContent = todo + " ";
    li.appendChild(button);
    console.log(li);
    document.querySelector("#tasks").appendChild(li);
  }

  function deleteToDo(event){
    event.target.parentNode.remove();
  }
