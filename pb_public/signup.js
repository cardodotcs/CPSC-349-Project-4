import { pb } from './main.js'

async function signupInfo() {

    console.log("Getting Account Input")
    var username = document.getElementById("username-sign-in").value
    console.log(username)
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("password-confirm").value
    var email = document.getElementById("email").value

    console.log("TYPING USERNAME BELOW")
    console.log(JSON.stringify(username))

    const recordTest = await pb.collection('users').create({
        username:  username,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
    }); 

    window.location.replace('login.html')
}
const register = document.getElementById('register-button')

if (register) {
    register.addEventListener('click', signupInfo)
}