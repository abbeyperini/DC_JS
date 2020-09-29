let taskTitleInput = document.getElementById("taskTitleInput");
let addTask = document.getElementById("addTask");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");

addTask.addEventListener("click", function() {
    let div = document.createElement("div")
    div.className = "task"
    div.setAttribute("draggable", "true")

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.className = "checkbox";
    div.appendChild(check);

    let title = document.createElement("h3");
    title.innerHTML = taskTitleInput.value;
    div.appendChild(title);

    let remove = document.createElement("button")
    remove.innerHTML = "Remove";
    div.appendChild(remove);

    remove.addEventListener('click', function() {    
        let p_dom = this.parentNode;
        p_dom.remove();
    });

    pendingTasks.appendChild(div);

    let checks = document.getElementsByClassName("checkbox");

    for (i = 0; i < checks.length; i++) {
        checks[i].onclick = function() {
            let p_dom = this.parentNode;
            let parent = p_dom.parentNode;
            if (parent == pendingTasks) {
                completedTasks.appendChild(p_dom);

            } else if (parent == completedTasks) {
                pendingTasks.appendChild(p_dom);
            };
        };
    };

    taskTitleInput.value = '';
});

taskTitleInput.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        addTask.click();
    };
});
// Hard mode: user can sort pending tasks by drag and drop and order persists on page reload