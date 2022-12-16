import { pb } from './main.js'

async function signupInfo() {

    console.log("Getting Account Input")
    var username = document.getElementById("username").value
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("password-confirm").value
    var email = document.getElementById("email").value


    console.log("Entered:  " + username + " " + name + " " + email + " " + password + " " + passwordConfirm)

    console.log(JSON.stringify(username))

    // example create data (auth acount requires password and and password confirm)
    // also in the users api rules i removed the api rule id = @request.auth.id for the create action - custom rule
    const data = {
        // "username": JSON.stringify(username),
        // "email": JSON.stringify(email),
        // "emailVisibility": true,
        "password": JSON.stringify(password),
        "passwordConfirm": JSON.stringify(passwordConfirm),
        // "name": JSON.stringify(name)
    };

    const record = await pb.collection('users').create(data);

    // (optional) send an email verification request
    // await pb.collection('users').requestVerification(email);



    // const user = await pb.collection('users').create({
    //     username: username,
    //     name: name,
    //     email: email,
    //     password: password,
    //     passwordConfirm: passwordConfirm
    // });

    window.location.replace('login.html')


    // "logout" the last authenticated account
    // pb.authStore.clear();

    // not sure if i should be calling clear() here or once user presses logout button 
}
const register = document.getElementById('register-button')

if (register) {
    register.addEventListener('click', signupInfo)
}