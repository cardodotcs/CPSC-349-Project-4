import { pb } from './main.js'

var Username = sessionStorage.getItem('Username');
var Password = sessionStorage.getItem('Password');

console.log("home page")
console.log(Username)
console.log(Password)


// you can also fetch all records at once via getFullList
const records = await pb.collection('posts').getFullList(200 /* batch size */, {
    sort: '-created',
});

console.log(records)

// RECORD FROM POSTS COLLECTION CONTAINS COLUMNS:
// id, created, updated, headline, featured_image, user, article


// ***************DISPLAY EXISTING POSTS FOR USER***********

const mainTag = document.querySelector('main')

// BASED ON EXERCISE 3 HOMEWORK fyi
for (const record of records) {
    console.log("hi")

    // CREATE ARTICLE ELEMENT and APPEND it as child element to article 
    const article = document.createElement('article')
    article.setAttribute('record-post-id', record.id)

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
        featuredImage.classList.add('w-16','h-auto')
        

    article.appendChild(featuredImage)


    //to be continued


    mainTag.appendChild(article)
}


// TO DO
// NEED TO CLEAR USERNAME AND LOGIN ONCE USER PRESSES LOGOUT BUTTON
// sessionStorage.clear();