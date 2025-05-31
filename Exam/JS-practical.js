const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');
const taskList = document.querySelector('#task-list .list-group');
const taskCounter = document.getElementById('task-counter');

let tasks = [];
let editMode = false;
let editTaskId = null;

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}


function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskCounter() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    if (taskCounter) {
        taskCounter.textContent = `${totalTasks} tasks total, ${completedTasks} completed`;
    }
}

function saveTask(title, description, priority, dueDate) {
    if (editMode) {
        tasks = tasks.map(task =>
            task.id === editTaskId
                ? { ...task, title, description, priority, dueDate }
                : task
        );
        editMode = false;
        editTaskId = null;
    } else {
        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            dueDate,
            completed: false
        };
        tasks.push(task);
    }
    renderTasks();
}

function renderTasks() {
    saveTasksToLocalStorage();

    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = `list-group-item d-flex justify-content-between align-items-start ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <div>
                <h5>${task.title} <small class="text-muted">(${task.priority})</small></h5>
                <p>${task.description}</p>
                <p class="text-muted"><strong>Due:</strong> ${task.dueDate || 'N/A'}</p>
            </div>
            <div>
                <button class="btn btn-sm btn-success me-2" onclick="toggleTask(${task.id})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="btn btn-sm btn-warning me-2" onclick="startEditTask(${task.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
    updateTaskCounter();
}


function toggleTask(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}


function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function startEditTask(taskId) {
    const taskToEdit = tasks.find(task => task.id === taskId);
    taskTitle.value = taskToEdit.title;
    taskDescription.value = taskToEdit.description;
    taskPriority.value = taskToEdit.priority;
    taskDueDate.value = taskToEdit.dueDate;
    editMode = true;
    editTaskId = taskId;
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskTitle.value.trim() && taskDescription.value.trim()) {
        saveTask(
            taskTitle.value.trim(),
            taskDescription.value.trim(),
            taskPriority.value,
            taskDueDate.value
        );
        taskForm.reset();
    }
});


loadTasks();
renderTasks();
