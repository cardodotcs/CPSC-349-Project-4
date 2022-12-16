import { pb }  from './main.js'

async function signupInfo() {

    console.log("Getting Account Input")
    var username = document.getElementById("username").value
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value

    const user = await pb.collection('users').create({
        username: username,
        name: name,
        email: email,
        password: password
    });

    window.location.replace('login.html')
    

    // "logout" the last authenticated account
    // pb.authStore.clear();

    // not sure if i should be calling clear() here or once user presses logout button 
}
const register = document.getElementById('register-button')

if (register) {
    register.addEventListener('click', signupInfo)
}