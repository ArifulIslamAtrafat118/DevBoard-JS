function showDate() {
    let today = new Date();

    let options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', options);

    document.getElementById("current-date").innerText = formattedDate;
}
showDate();

function getCurrentTime() {
    let now = new Date();
    return now.toLocaleTimeString("en-US");
}