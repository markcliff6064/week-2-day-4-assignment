// Get the task list
const taskList = document.getElementById("taskList");

// Get all tasks
const tasks = document.querySelectorAll("#taskList li");

// This variable will remember which task
// is currently being dragged
let draggedTask = null;



// DRAG START


tasks.forEach(function(task) {

    task.addEventListener("dragstart", function(event) {

        // Remember the task being dragged
        draggedTask = task;

        // Store the task ID
        event.dataTransfer.setData("text/plain", task.id);

    });



    // DRAG OVER
  

    task.addEventListener("dragover", function(event) {

        /*
            preventDefault allows the user
            to drop an item here.
        */
        event.preventDefault();

    });


  
    // DROP


    task.addEventListener("drop", function(event) {

        event.preventDefault();

        // Make sure we are not dropping
        // the task on itself
        if (draggedTask !== task) {

            /*
                Move the dragged task before
                the task where it was dropped.
            */
            taskList.insertBefore(draggedTask, task);

            // Update the priority numbers
            updateNumbers();

        }

    });


  
    // DRAG END
 

    task.addEventListener("dragend", function() {

        // Clear the dragged task
        draggedTask = null;

    });

});



// UPDATE PRIORITY NUMBERS


function updateNumbers() {

    // Get the tasks in their new order
    const allTasks = document.querySelectorAll("#taskList li");

    allTasks.forEach(function(task, index) {

        // Update the number
        task.querySelector(".priority").textContent =
            (index + 1) + ".";

    });

}