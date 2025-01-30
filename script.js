document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    let isValid = true;
    if (username === "") {
        usernameError.innerText = "Username cannot be empty";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.innerText = "Enter a valid email with '@'";
        isValid = false;
    }

    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6}$/;
    if (!passwordRegex.test(password)) {
        passwordError.innerText = "Password must be 6 characters long and contain both letters and numbers";
        isValid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Confirm password cannot be empty";
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }
    if (isValid) {
        alert("Form is submitted successfully");
        document.getElementById("signupForm").reset(); // Reset form fields
    }
});
