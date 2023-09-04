function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskElement = document.createElement("li");
    taskElement.innerText = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        taskElement.remove();
    });

    taskElement.addEventListener("click", function() {
        taskElement.classList.toggle("completed");
    });

    taskElement.appendChild(deleteButton);

    document.getElementById("task-list").appendChild(taskElement);
    taskInput.value = "";
}
