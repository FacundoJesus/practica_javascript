let todoApp = {
    tasks: [],
    addTask(task) {
        this.tasks.push({text: task, completed: false});
        this.renderTasks();
    },

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    },

    removeCompletedTasks() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.renderTasks();
    },

    renderTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        this.tasks.forEach((task,index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.onclick = () => this.toggleTask(index);

            if(task.completed) {
                li.classList.add("completed");
            }

            taskList.appendChild(li);
        })
    }
};

document.getElementById("addTask").onclick = () => {

    let newTask = document.getElementById("taskInput");

    todoApp.addTask(newTask.value);
    newTask.value = "";
    
};

