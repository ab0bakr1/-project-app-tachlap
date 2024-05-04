let UserName = document.getElementById("username");
let Password = document.getElementById("password");
let LogInBTN = document.getElementById("login");
let Error = document.getElementById("error");

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")



LogInBTN.addEventListener('click', ()=> {
    if (getUser && getUser.trim() === UserName.value && getPassword && getPassword.trim() === Password.value) {
        window.location = "index.html"
    } else {
        Error.style.display = "block"
        Error.innerText = "Wrong username or password"
    }
})
