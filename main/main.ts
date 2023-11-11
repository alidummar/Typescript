// main.ts

// Interface for representing a task
interface Task {
    id: number;
    content: string;
  }
  
  // Function to add a new task
  function addTask(newTask: string): Task {
    const task: Task = {
      id: Date.now(),
      content: newTask,
    };
    return task;
  }
  
  // Function to render tasks on the page
  function renderTasks(tasks: Task[]): void {
    const tasksContainer = document.getElementById('tasks');
  
    if (tasksContainer) {
      tasksContainer.innerHTML = '';
  
      tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
  
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
  
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text';
        input.value = task.content;
        input.readOnly = true;
  
        contentDiv.appendChild(input);
  
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';
  
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
  
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
  
        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);
  
        taskDiv.appendChild(contentDiv);
        taskDiv.appendChild(actionsDiv);
  
        tasksContainer.appendChild(taskDiv);
      });
    }
  }
  
  // Event listener for the form submission
  const form = document.getElementById('new-task-form');
  
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const inputElement = document.getElementById('new-task-input') as HTMLInputElement;
  
      if (inputElement) {
        const newTask = inputElement.value;
  
        if (newTask.trim() !== '') {
          const task = addTask(newTask);
          tasks.push(task);
          renderTasks(tasks);
          inputElement.value = '';
        }
      }
    });
  }
  
  // Initial tasks array
  const tasks: Task[] = [];
  
  // Initial rendering of tasks
  renderTasks(tasks);
  