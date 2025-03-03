document.getElementById("btn-clear-history")
    .addEventListener('click', function(){
        let activityContainer = document.getElementById('activity-container');
        activityContainer.textContent = '';
})