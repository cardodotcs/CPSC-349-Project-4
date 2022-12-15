const pb = new PocketBase('http://127.0.0.1:8090');

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
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
    
    // "logout" the last authenticated account
    pb.authStore.clear();
    
}



const loginButton = document.getElementById("login-button")
// Listen for Click Event
loginButton.addEventListener('click', loginInfo)


// BELOW WORKS

