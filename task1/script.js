function checkEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (email.endsWith("@gmail.com")) {
        result.innerHTML = name + ",your entered email is correct.";
        result.style.color = "green";
    } else {
        result.innerHTML = name + ",your entered email is incorrect!";
        result.style.color = "red";
    }
}