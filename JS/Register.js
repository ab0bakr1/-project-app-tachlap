let UserName = document.getElementById("username");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let RegisterBTN = document.getElementById("register");
let Error = document.getElementById("error");


RegisterBTN.addEventListener('click', ()=> {
    if (UserName.value === "" || Email.value === "" || Password.value === "") {
        Error.style.display = "block"
        Error.innerText = "please fill data"
    }else if(localStorage.getItem("username") === UserName.value){
        Error.style.display = "block"
        Error.innerText = "This username is already taken"
    }else{
    localStorage.setItem("username", UserName.value)
    localStorage.setItem("password", Password.value)
    window.location = "/Login.html"

    }
})