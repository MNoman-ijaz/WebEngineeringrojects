function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement('li');
    li.className = 'taskItem';

    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);

    var deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}
