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

    let taskElement = new DOMParser()
      .parseFromString(htmlTask, "text/html")
      .querySelector(".task");
    tasksList.appendChild(taskElement);

    taskElement.querySelector("a").addEventListener("click", () => {
      tasksList.removeChild(taskElement);
    });
  }

  taskInput.value = "";
  event.preventDefault();
});
