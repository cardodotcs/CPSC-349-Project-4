import { pb } from './main.js'

var Username = localStorage.getItem('Username');
var Password = localStorage.getItem('Password');

console.log("about page")
console.log(Username)

if (Username) {
    document.getElementById("home").href = "/home.html"
    document.getElementById("login").innerHTML = "Logout"
    const logoutButt = document.getElementById("login")
    if (logoutButt) {
        logoutButt.addEventListener('click', logout)
    }
}

async function logout() {
    localStorage.clear()
}

