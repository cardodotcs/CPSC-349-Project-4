import { pb } from './main.js'


async function loginInfo() {

    console.log("Getting Login Input")
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    console.log("your username is " + username + " and your password is " + password)


    // currently only logging in users collection

    try {
        const userData = await pb.collection('users').authWithPassword(
            username,
            password,
        );

        console.log(userData)
        console.log(userData.record)
        console.log("user email info " + userData.record.email)
        console.log("user id info " + userData.record.id)

        var userId = userData.record.id

        // after the above you can also access the auth data from the authStore
        console.log("pb.authStore.isValid" + pb.authStore.isValid);
        console.log("pb.authStore.token" + pb.authStore.token);
        console.log("pb.authStore.model.id " + pb.authStore.model.id);

        if (pb.authStore.isValid) {
            localStorage.setItem('Username', username);

            localStorage.setItem('Password', password);

            localStorage.setItem('UserId', userId);


            // if the user exists redirect them to home page (aka blog page)
            window.location.replace('home.html')

        }

    } catch (err) {
        console.log(err);
        console.log("BAD CREDENTIALS")



        setTimeout(() => {
            var errorLogin = document.getElementById("error-login-alert")
            errorLogin.classList.remove('invisible')
        }, 1000)


    }
}

// Find login-button in the DOM by id and assign it to a javascript variable
const loginButton = document.getElementById("login-button")

// Add Event Listener to Login Button (if it exists) and Listen for Click Event. Run Login Function if clicked. 
 if (loginButton) {
    loginButton.addEventListener('click', loginInfo)
}



