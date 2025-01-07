document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const viewAllTasksBtn = document.getElementById("view-all-tasks-btn");
    const dateElement = document.getElementById("date");
    const modal = document.getElementById("modal");
    const modalCloseBtn = modal.querySelector(".close-btn");
    const allTasksList = document.getElementById("all-tasks-list");

    // Display current date
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);

    // Add task
    addTaskBtn.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const modalTask = document.createElement("li");
            modalTask.textContent = `${task} (Added at: ${timeString})`;
            allTasksList.appendChild(modalTask);

            taskInput.value = "";
        }
    });

    // View all tasks
    viewAllTasksBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
