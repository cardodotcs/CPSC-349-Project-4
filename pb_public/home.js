import { pb } from './main.js'

var Username = localStorage.getItem('Username');
var Password = localStorage.getItem('Password');
var UserId = localStorage.getItem('UserId');
// get user id from session storage

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
    article.classList.add('border-8', 'border-[#1B2663]', 'm-3')

    // CREATE HEADING 2 ELEMENT
    const headline = document.createElement('div') 
    headline.classList.add('container', 'inline-flex', 'flex-col', 'md:flex-row')
    const title = document.createElement('h2')
    title.classList.add('flex', 'basis-11/12', 'p-3')
    title.textContent = record.headline
    headline.appendChild(title)
    

    // add style to headline
    headline.classList.add('bg-[#1B2663]')
    
    const deleteButt = document.createElement('button')
    deleteButt.classList.add('text-red-600','flex','content-end','basis-1/12','p-3', 'pl-12', 'text-end')
    deleteButt.setAttribute('id', 'deleteText')
    deleteButt.textContent = "x"

    headline.appendChild(deleteButt)
    article.appendChild(headline)

    // MAYBE just remove image if we cant get it to display right
    // CREATE FEATURED_IMAGE ELEMENT and APPEND it as child element to article 
    // i am adding uploading images (using admin ui) i got from pexels btw we probably need to make a note of that to credit pexels
    const featuredImage = document.createElement('img')
    const featuredImageSrc = 'http://127.0.0.1:8090/api/files/posts/' + record.id + '/' + record.featured_image + '?thumb=0x500'
        featuredImage.setAttribute('src', featuredImageSrc) 
        featuredImage.classList.add('w-25', 'h-auto', 'object-center', 'justify-center', 'mx-auto', 'p-3')

        if (record.featured_image != '') {
            article.appendChild(featuredImage)
        }
        
    

    // add style to featured_image


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
    authorByLine.classList.add('text-gray-300', 'text-center', 'p-3')

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
    
    var myHeadline = document.getElementById("create-headline").value;
    var myBody = document.getElementById("create-body").value
    let myImage = document.getElementById('fileInput').files[0];
    
    let formData = new FormData();

    // set headline text field value 
    formData.append('headline', myHeadline);
    formData.append('featured_image', myImage);
    formData.append('user', UserId);
    formData.append('body', myBody);
  

    // upload and create new record
    const createdRecord = await pb.collection('posts').create(formData);

    window.location.reload()
}


const createPostButton = document.getElementById('create-post-button')

if (createPostButton) {
    createPostButton.addEventListener('click', createPostFunction)
}




// ************************LOG OUT USER************************
// TO DO
// Done by R
// NEED TO CLEAR USERNAME AND LOGIN ONCE USER PRESSES LOGOUT BUTTON
// localStorage.clear();
const logoutButt = document.getElementById("logout")

// Add Event Listener to Login Button (if it exists) and Listen for Click Event. Run Login Function if clicked. 
if (logoutButt) {
    logoutButt.addEventListener('click', logout)
}

async function logout() {
    localStorage.clear()
}

async function testFunction() {
    
}

const deleteButtFirst = document.getElementById("deleteText")
deleteButtFirst.addEventListener('click', testFunction)
// TO DO
// Done by shiv
// need to make sure that when we click on the home button it doesn't go to index.html
