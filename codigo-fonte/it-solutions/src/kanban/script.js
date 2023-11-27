const tasks = [
    { id: 1, title: 'Task 1', status: 'todo', tag: 'bug' },
    { id: 2, title: 'Task 2', status: 'in-progress', tag: 'bug' },
    { id: 3, title: 'Task 3', status: 'in-review', tag: 'bug' },
    { id: 4, title: 'Task 4', status: 'done', tag: 'bug' },
    { id: 5, title: 'Task 5', status: 'done', tag: 'bug' },
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
            const titleElement = document.createElement('div');
            titleElement.textContent = task.title;
            contentContainer.appendChild(titleElement);

            // Display tag
            const tagElement = document.createElement('div');
            tagElement.textContent = 'Tag: ' + task.tag;
            contentContainer.appendChild(tagElement);

            taskElement.appendChild(contentContainer);
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
            tag: newTag
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

