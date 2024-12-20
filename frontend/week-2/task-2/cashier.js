const name = document.getElementById("name")
const mobile = document.getElementById("mobile")
const address = document.getElementById("address")
const submit = document.getElementById("submit")
const nameDisplay = document.getElementById("name-display")
const mobileDisplay = document.getElementById("mobile-display")
const addressDisplay = document.getElementById("address-display")

function setTime() {
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;

    document.getElementById('dayDate').innerHTML = formattedToday;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds()
    if (seconds < 10) seconds = '0' + seconds;
    if (minute < 10) seconds = '0' + minute;
    if (hour < 10) hour = '0' + hour;
    document.getElementById("time").innerHTML = hour + ":" + minute + ':' + seconds

}

setInterval(setTime, 1000)
submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(!mobile.value || !name.value){
        alert("Please Enter Details Properly!")
    }else{
    nameDisplay.innerHTML = name.value
    mobileDisplay.innerHTML = mobile.value
    addressDisplay.innerHTML = address.value || "None"
    }
})
