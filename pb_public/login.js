import { pb } from './main.js'

// i made a login.js page but I am not sure if we are just going to use one js file instead because of the Pocketbase line above. We can just rename it to main.js 

// Log in the User if they Exist in the Database
async function loginInfo() {

    console.log("Getting Login Input")
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    console.log("your username is " + username + " and your password is " + password)
    
    // currently only logging in users collection
    const userData = await pb.collection('users').authWithPassword(
        username,
        password,
    );

    console.log(userData)
    console.log(userData.record)
    console.log("user email info " + userData.record.email)

    // after the above you can also access the auth data from the authStore
    console.log("pb.authStore.isValid" + pb.authStore.isValid);
    console.log("pb.authStore.token" + pb.authStore.token);
    console.log("pb.authStore.model.id " + pb.authStore.model.id);


    if (pb.authStore.isValid) {
        //alert("You are a user that exists!")


        //
        sessionStorage.setItem('Username', username);

        sessionStorage.setItem('Password', password);

       // if the user exists redirect them to home page (aka blog page)
       window.location.replace('home.html')

    }

    // "logout" the last authenticated account
    // pb.authStore.clear();

    // not sure if i should be calling clear() here or once user presses logout button 
}

// Find login-button in the DOM by id and assign it to a javascript variable
const loginButton = document.getElementById("login-button")

//
const testing = document.getElementById("testing")

// Add Event Listener to Login Button (if it exists) and Listen for Click Event. Run Login Function if clicked. 
if (loginButton) {
loginButton.addEventListener('click', loginInfo)
}



