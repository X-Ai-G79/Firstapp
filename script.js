function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    const categorySelect = document.getElementById("category");
    const categoryText = categorySelect.value;

    if (taskText === "") {
        return;
    }

    let categoryBox = document.getElementById(categoryText);

    if (!categoryBox) {
        categoryBox = document.createElement("div");
        categoryBox.id = categoryText;
        categoryBox.className = 'category-box';
        const categoryLabel = document.createElement("h2");
        categoryLabel.innerText = categoryText;
        categoryBox.appendChild(categoryLabel);
        const taskList = document.createElement("ul");
        categoryBox.appendChild(taskList);
        document.getElementById("task-list").appendChild(categoryBox);
    }

    const taskList = categoryBox.querySelector("ul");
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
    taskList.appendChild(taskElement);
    taskInput.value = "";
}