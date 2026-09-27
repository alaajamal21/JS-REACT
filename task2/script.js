function checkPassword() {
    let password = document.getElementById("password").value;
    let strengthBar = document.getElementById("strengthBar");
    let percentage = document.getElementById("percentage");
    let lengthCheck = document.getElementById("lengthCheck");
    let smallCheck = document.getElementById("smallCheck");
    let capitalCheck = document.getElementById("capitalCheck");
    let strength = 0;

    // Check length
    if (password.length >= 8 && password.length <= 20) {
        strength += 40;
        lengthCheck.innerHTML = "Password length is valid";
        lengthCheck.style.color = "green";
    } else {
        lengthCheck.innerHTML = "Password must be 8-20 characters";
        lengthCheck.style.color = "red";
    }

    // Check lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 30;
        smallCheck.innerHTML = "Contains lowercase letters";
        smallCheck.style.color = "green";
    } else {
        smallCheck.innerHTML = "Contains lowercase letters";
        smallCheck.style.color = "red";
    }

    // Check uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 30;
        capitalCheck.innerHTML = "Contains uppercase letters";
        capitalCheck.style.color = "green";
    } else {
        capitalCheck.innerHTML = "Contains uppercase letters";
        capitalCheck.style.color = "red";
    }

    // Show percentage
    percentage.innerHTML = strength + "%";
    strengthBar.style.width = strength + "%";

    // Change bar color
    if (strength <= 30) {
        strengthBar.style.backgroundColor = "red";
    } else if (strength <= 60) {
        strengthBar.style.backgroundColor = "orange";
    } else {
        strengthBar.style.backgroundColor = "green";
    }
}