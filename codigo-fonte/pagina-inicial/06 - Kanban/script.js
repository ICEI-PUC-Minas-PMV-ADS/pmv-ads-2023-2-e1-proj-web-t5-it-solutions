const tasks = [
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'in-progress' },
  { id: 3, title: 'Task 3', status: 'in-review' },
  { id: 4, title: 'Task 4', status: 'done' },
  { id: 4, title: 'Task 5', status: 'done' },
];

let selectedTaskId = null;

// Function to render tasks in their respective columns
function renderTasks() {
    const columns = ['todo', 'in-progress', 'in-review', 'done'];

    columns.forEach(column => {
        const columnElement = document.getElementById(column + '-tasks');
        const filteredTasks = tasks.filter(task => task.status === column);

        columnElement.innerHTML = '';
        filteredTasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.textContent = task.title;
            taskElement.setAttribute('data-task-id', task.id);
            taskElement.addEventListener('click', () => openEditModal(task.id));
            columnElement.appendChild(taskElement);
        });
    });
}

// Function to open the edit modal
function openEditModal(taskId) {
    selectedTaskId = taskId;
    const task = tasks.find(task => task.id === selectedTaskId);
    document.getElementById('editTitle').value = task.title;
    document.getElementById('editStatus').value = task.status;
    document.getElementById('editModal').style.display = 'block';
}

// Function to update the task information and close the edit modal
function updateTask() {
    const newTitle = document.getElementById('editTitle').value;
    const newStatus = document.getElementById('editStatus').value;
    const taskIndex = tasks.findIndex(task => task.id === selectedTaskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].title = newTitle;
        tasks[taskIndex].status = newStatus;
        renderTasks();
        closeEditModal();
    }
}

// Function to close the edit modal
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    selectedTaskId = null;
}

// Function to open the add task modal
function openAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}

// Function to add a new task and close the add task modal
function addTask() {
    const newTitle = document.getElementById('newTitle').value;
    const newStatus = document.getElementById('newStatus').value;

    if (newTitle.length < 1) {
      
    }

    const newTask = {
        id: tasks.length + 1,
        title: newTitle,
        status: newStatus,
    };

    tasks.push(newTask);
    renderTasks();
    closeAddTaskModal();
}

// Function to close the add task modal
function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
    document.getElementById('newTitle').value = '';
    document.getElementById('newStatus').value = 'todo';
    document.getElementById('addTaskButton').disabled = true;
}

document.getElementById('newTitle').addEventListener('input', function () {
  const addButton = document.getElementById('addTaskButton');
  addButton.disabled = this.value.trim() === '';
});

// Initial rendering of tasks
renderTasks();