const sign = document.getElementById("sign")
let loggedIn = "cashier"
const cashierIcon = document.querySelector("#cashier-icon img");
const adminIcon = document.querySelector("#admin-icon img");
const username = document.getElementById("username");
const password = document.getElementById("password");

function toggleSelection(role) {
    cashierIcon.classList.remove("border-orange-500", "bg-orange-200", "scale-110");
    adminIcon.classList.remove("border-orange-500", "bg-orange-200", "scale-110");

    if (role === "cashier") {
        cashierIcon.classList.add("border-orange-500", "bg-orange-200", "scale-110");
    } else {
        adminIcon.classList.add("border-orange-500", "bg-orange-200", "scale-110");
    }
    loggedIn = role
    console.log(loggedIn);


}
toggleSelection("cashier")
cashierIcon.addEventListener("click", (e) => toggleSelection("cashier"));
adminIcon.addEventListener("click", (e) => toggleSelection("admin"));
console.log(loggedIn);

function validateForm() {
    // console.log("validateForm function called");  // Debugging line to ensure it's being called
    if (username.value.trim() === "" || password.value.trim() === "") {
        alert('Enter Details Properly');
        return false;
    }
    if (password.length < 8) {
        alert('Password Should Have 8 or more Characters');
        return false;
    }
    else {
        return true;
    }

}
function auth() {
    if (loggedIn == "admin") {

        if (username.value.trim() != "admin" || password.value.trim() != "admin@dsoc24") {
            alert('Wrong Username or Password')
            username.value = ""
            password.value = ""
        } else {
            alert("Logged In")
            window.location.href = "admin.html"
        }
    } else {
        if (username.value.trim() != "cashier" || password.value.trim() != "cashier@dsoc24") {
            alert('Wrong Username or Password')
            username.value = ""
            password.value = ""


        } else {
            alert("Logged In")
            window.location.href = "cashier.html"
        }
    }
}
sign.addEventListener("click", (e) => {
    if (validateForm()) {
        auth()
    }
})