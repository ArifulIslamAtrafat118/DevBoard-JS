document.getElementById("activity-message").style.display= 'none';

let buttonCount = 0;
let buttons = document.getElementsByClassName("btn-compleate");
for(const button of buttons){
    button.addEventListener('click', function(){
        alert("Board Updated Successfully");

        let activityMessage = document.getElementById("activity-message");
        let newMessageDiv = document.createElement('div');
        newMessageDiv.classList.add("activity-message", "bg-[#F4F7FF]", "rounded-lg", "px-4", "py-3");
        newMessageDiv.innerHTML = `<p class="text-sm">You have Complete The Task <span class="" id="task-headline-target-span"></span> at <span
                                id="" class="">${getCurrentTime()}</span></p>`;
        let activityContainer = document.getElementById("activity-container");
        activityContainer.appendChild(newMessageDiv);

        // get  headline 
        let parentDiv = this.closest(".task-card-parent-div");
        const taskCardHeadline = parentDiv.querySelector("h2");
        const taskCardHeadlineText = taskCardHeadline.innerText;

        //set headline
        const setTaskHeadline = newMessageDiv.querySelector("#task-headline-target-span"); 
        //note: newMessageDiv  create kora hoyce ..... querySelector newMessageDiv theke task-headline-target-span namok id'r element(span) ke khuje nea ase
        //then otar bitore taskCardHeadlineText ke dukai dey.
        setTaskHeadline.innerText = taskCardHeadlineText; 

        //disable the button
        button.setAttribute("disabled", "true");
        button.classList.add("opacity-30", "cursor-not-allowed");
        button.innerText = "Completed";

        // count task
        const doneTaskCount = document.getElementById("done-task-count");
        const doneTaskCountString = doneTaskCount.innerText;
        let convertedDoneTaskCount = Number(doneTaskCountString);
        doneTaskCount.innerText = convertedDoneTaskCount + 1;
        
        const assignedTask = document.getElementById("assigned-task");
        const assignedTaskString = assignedTask.innerText;
        let convertedAssignedTask = Number(assignedTaskString);
        assignedTask.innerText = convertedAssignedTask - 1;
        
        //show the final alart
        buttonCount++;
        if(buttonCount == 6) {
            alert("All task is complete.");
        }
    })
}