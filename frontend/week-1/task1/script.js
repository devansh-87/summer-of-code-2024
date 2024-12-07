console.log("Script Initialising.....");

function validateForm() {
    // console.log("validateForm function called");  // Debugging line to ensure it's being called

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if(email ==="" || password === ""){
        alert('Enter Details Properly');
        return false;
    }
    if(email.includes('@')===false){
        alert('Email Should Contain @');
        return false;
    }
    if(password.length < 8){
        alert('Password Should Have 8 or more Characters');
        return false;
    }
    else{
        alert("Logged In")
        return true;
    }

}