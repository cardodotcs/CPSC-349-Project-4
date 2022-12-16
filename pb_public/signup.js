import { pb } from './main.js'

async function signupInfo() {

    console.log("Getting Account Input")
    var username = document.getElementById("username-sign-in").value
    console.log(username)
    //var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("password-confirm").value
    var email = document.getElementById("email").value


    // console.log("Entered:  " + username + " " + name + " " + email + " " + password + " " + passwordConfirm)

    
   

    // example create data (auth acount requires password and and password confirm)
    // also in the users api rules i removed the api rule id = @request.auth.id for the create action - custom rule
    // const data = {
    //     // "username": JSON.stringify(userName),
    //     "password": JSON.stringify(password),
    //     "passwordConfirm": JSON.stringify(passwordConfirm),
    // };

    console.log("TYPING USERNAME BELOW")
    console.log(JSON.stringify(username))
    //const record = await pb.collection('users').create(data);

    const recordTest = await pb.collection('users').create({
        username:  username,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
    });

    // (optional) send an email verification request
    // await pb.collection('users').requestVerification(email);
    
    //const updateName = await pb.collection('users').update(
    //    username.id,
    //    {
    //       name: name
    //    }
    //)

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