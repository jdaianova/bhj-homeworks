const taskInput = document.getElementById("task__input");
const buttonTaskAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

buttonTaskAdd.addEventListener("click", (event) => {
  if (taskInput.value.trim() != "") {

    const htmlTask = `
    <div class="task">
      <div class="task__title">${taskInput.value}</div>
      <a href="#" class="task__remove">
        &times;
      </a>
    </div>`;

    tasksList.innerHTML = tasksList.innerHTML + htmlTask;
    //console.log(tasksList);

    // обработка события удаления задания
    // ??.addEventListener("click", () => {
    //   document.getElementById("tasks__list").removeChild(task);
    // });
  }

  //обнуление поля ввода
  taskInput.value = "";
  event.preventDefault();
});
