const taskInput = document.getElementById("task__input");
const buttonTaskAdd = document.getElementById("tasks__add");

buttonTaskAdd.addEventListener("click", () => {
  if (taskInput.value != "") {

    //создание div class="task"
    const task = document.createElement("div");
    task.classList.add("task");
    document.getElementById("tasks__list").appendChild(task);

    // создание div class="task__title"
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    task.appendChild(taskTitle);
    taskTitle.textContent = taskInput.value;

    // создание a href="#" class="task__remove"
    const linkRemove = document.createElement("a");
    linkRemove.setAttribute("href", "#");
    linkRemove.classList.add("task__remove");
    task.appendChild(linkRemove);
    linkRemove.innerText = "&times;"; // ?? крестик не отображается

    // обработка события удаления задания
    linkRemove.addEventListener("click", () => {
      document.getElementById("tasks__list").removeChild(task);
    });
  }

  //обнуление поля ввода
  taskInput.value = "";
});
