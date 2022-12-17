import { pb } from './main.js'

var Username = sessionStorage.getItem('Username');
var Password = sessionStorage.getItem('Password');

console.log("home page")
console.log(Username)
console.log(Password)

if (!Username) {
    window.location.replace('login.html')
}
// you can also fetch all records at once via getFullList
const records = await pb.collection('posts').getFullList(200 /* batch size */, {
    sort: '-created',
});

console.log(records)

// RECORD FROM POSTS COLLECTION CONTAINS COLUMNS:
// id, created, updated, headline, featured_image, user, body


// ***************DISPLAY EXISTING POSTS FOR USER***********

const existingPostsContainer = document.getElementById('existing-posts-container')

// BASED ON EXERCISE 3 HOMEWORK fyi
for (const record of records) {
    console.log("hi")

    // CREATE ARTICLE ELEMENT and APPEND it as child element to article 
    const article = document.createElement('article')
    article.setAttribute('record-post-id', record.id)

    //add style to article
    article.classList.add('border-8', 'border-indigo-600', 'm-3')

    // CREATE HEADING 2 ELEMENT
    const headline = document.createElement('h2')
    headline.textContent = record.headline

    // add style to headline
    headline.classList.add('bg-red-500')

    article.appendChild(headline)

    // MAYBE just remove image if we cant get it to display right
    // CREATE FEATURED_IMAGE ELEMENT and APPEND it as child element to article 
    // i am adding uploading images (using admin ui) i got from pexels btw we probably need to make a note of that to credit pexels
    const featuredImage = document.createElement('img')
    const featuredImageSrc = 'http://127.0.0.1:8090/api/files/posts/' + record.id + '/' + record.featured_image + '?thumb=0x500'
    console.log(featuredImageSrc)
    featuredImage.setAttribute('src', featuredImageSrc)

    // add style to featured_image
    featuredImage.classList.add('w-16', 'h-auto')


    article.appendChild(featuredImage)


    // CREATE Header 3 Element (to display username) and append it as a child element to article
    const authorByLine = document.createElement('h3')
    console.log("record logs below")
    console.log(record.id)
    console.log(record.user)
    console.log(record)

    // record.user is a relation id so i need to access the user collection to get the actual user name ? 
    const recordUserName = await pb.collection('users').getOne(record.user, {})
    console.log("THE ONE USER RECORD TO RETRIEVE NAME")
    console.log(recordUserName)
    console.log(recordUserName.name)


    authorByLine.textContent = recordUserName.name

    // add style to author by line
    authorByLine.classList.add('text-purple-400')

    article.appendChild(authorByLine)


    // CREATE paragraph element (to display body) and append it as a child element to article
    const body = document.createElement('p')
    body.textContent = record.body

    // add style to body 
    body.classList.add('text-center')

    article.appendChild(body)


    existingPostsContainer.appendChild(article)
}


// ***************CREATE NEW POST FOR LOGGED IN USER***********



async function createPostFunction() {


    console.log("within create post function")

    var myHeadline = document.getElementById("my-headline").value;
    var myBody = document.getElementById("my-body").value

    console.log("Getting create post Input")
    console.log("")
    console.log(myHeadline)
    console.log(myBody)




}


const createPostButton = document.getElementById('create-post-button')

if (createPostButton) {
    createPostButton.addEventListener('click', createPostFunction)
}




// ************************LOG OUT USER************************
// TO DO
// Done by R
// NEED TO CLEAR USERNAME AND LOGIN ONCE USER PRESSES LOGOUT BUTTON
// sessionStorage.clear();
const logoutButt = document.getElementById("logout")

// Add Event Listener to Login Button (if it exists) and Listen for Click Event. Run Login Function if clicked. 
if (logoutButt) {
    logoutButt.addEventListener('click', logout)
}

async function logout() {
    sessionStorage.clear()
}

// TO DO
// Done by shiv
// need to make sure that when we click on the home button it doesn't go to index.html

if (Username) {
    document.getElementById("home").href = "/home.html"
}