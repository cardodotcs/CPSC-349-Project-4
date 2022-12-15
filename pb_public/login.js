const pb = new PocketBase('http://127.0.0.1:8090');

// i made a login.js page but I am not sure if we are just going to use one js file instead because of the Pocketbase line above. We can just rename it to main.js 

// Log in the User if they Exist in the Database
async function loginInfo() {

    console.log("Getting Login Input")
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    console.log("you're username is " + username + " and your password is " + password)

    // currently only logging in users collection
    const authData = await pb.collection('users').authWithPassword(
        username,
        password,
    );
    
    // after the above you can also access the auth data from the authStore
    console.log("pb.authStore.isValid" + pb.authStore.isValid);
    console.log("pb.authStore.token" + pb.authStore.token);
    console.log("pb.authStore.model.id " + pb.authStore.model.id);


    if (pb.authStore.isValid) {
        alert("You are a user that exists!")

        // if the user exists redirect them to home page (aka blog page)
        window.location.replace('home.html')
    } 
    
    // "logout" the last authenticated account
    // pb.authStore.clear();

    // not sure if i should be calling clear() here or once user presses logout button 
}

// Find login-button in the DOM by id and assign it to a javascript variable
const loginButton = document.getElementById("login-button")

// Add Event Listener to Login Button and Listen for Click Event. Run Login Function if clicked. 
loginButton.addEventListener('click', loginInfo)


