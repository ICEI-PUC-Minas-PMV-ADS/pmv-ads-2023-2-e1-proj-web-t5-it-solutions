const tasks = [
  { id: 1, title: 'Task 1', status: 'todo', tag: 'bug', created_at: '2023-11-01' },
  { id: 2, title: 'Task 2', status: 'in-progress', tag: 'bug', created_at: '2023-11-02' },
  { id: 3, title: 'Task 3', status: 'in-review', tag: 'melhoria', created_at: '2023-11-03' },
  { id: 4, title: 'Task 4', status: 'done', tag: 'urgente', created_at: '2023-11-04' },
  { id: 5, title: 'Task 5', status: 'done', tag: 'suporte', created_at: '2023-11-05' },
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
            
            // Create a container for title and tag
            const contentContainer = document.createElement('div');
            
            // Display title
            const titleElement = document.createElement('h2');
            titleElement.textContent = task.title;
            contentContainer.appendChild(titleElement);

            // Display tag
            const tagElement = document.createElement('h4');
            tagElement.textContent = 'Tag: ' + task.tag;
            contentContainer.appendChild(tagElement);

            taskElement.appendChild(contentContainer);
            taskElement.setAttribute('data-task-id', task.id);
            taskElement.addEventListener('click', () => openEditModal(task.id));

            const createdAtElement = document.createElement('div');
            createdAtElement.textContent = 'Created at: ' + task.created_at;
            contentContainer.appendChild(createdAtElement);

            taskElement.appendChild(contentContainer);
            taskElement.setAttribute('data-task-id', task.id);
            taskElement.classList.add('small-text');
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
      document.getElementById('editTag').value = task.tag;
      document.getElementById('editModal').style.display = 'block';
      showOverlay();
  }
  
  // Function to update the task information and close the edit modal
  function updateTask() {
      const newTitle = document.getElementById('editTitle').value;
      const newStatus = document.getElementById('editStatus').value;
      const newTag = document.getElementById('editTag').value;
      const taskIndex = tasks.findIndex(task => task.id === selectedTaskId);
      
  
      if (taskIndex !== -1) {
          tasks[taskIndex].title = newTitle;
          tasks[taskIndex].status = newStatus;
          tasks[taskIndex].tag = newTag;
          renderTasks();
          closeEditModal();
          hideOverlay();
      }
  }
  // Function to delete a task
  function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      renderTasks();
      closeEditModal();
      hideOverlay();
    }
  }
  
  // Function to close the edit modal
  function closeEditModal() {
      document.getElementById('editModal').style.display = 'none';
      selectedTaskId = null;
  }
  
  // Function to open the add task modal
  function openAddTaskModal() {
    console.log('abri')
      document.getElementById('addTaskModal').style.display = 'block';
      showOverlay();
  }
  
  // Function to add a new task and close the add task modal
  function addTask() {
      const newTitle = document.getElementById('newTitle').value.trim();
      const newStatus = document.getElementById('newStatus').value;
      const newTag = document.getElementById('newTag').value;
  
      if (newTitle.length < 1) {
      return;
      }
  
      if (newTitle !== '') {
        const newTask = {
            id: tasks.length + 1,
            title: newTitle,
            status: newStatus,
            tag: newTag,
            created_at: new Date().toISOString().slice(0, 10),
        };
  
        tasks.push(newTask);
        renderTasks();
        closeAddTaskModal();
    }
  }
  
  // Function to close the add task modal
  function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
    document.getElementById('newTitle').value = '';
    document.getElementById('newStatus').value = 'todo';
    document.getElementById('newTag').value = 'bug';

    hideOverlay();
}


  document.getElementById('newTitle').addEventListener('input', function () {
    const addButton = document.getElementById('addTaskButton');
    addButton.disabled = this.value.trim() == '';
  });
  
  function showOverlay() {
    console.log('show overlay')
      document.getElementById('overlay').style.display = 'block';
      //document.body.classList.add('blur');
  }
  
  function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';

    // Check if both overlay and addTaskModal are hidden
    const addTaskModal = document.getElementById('addTaskModal');
    if (addTaskModal.style.display === 'none') {
        document.body.classList.remove('blur');
    }
  }
  
  // Initial rendering of tasks
  renderTasks();

