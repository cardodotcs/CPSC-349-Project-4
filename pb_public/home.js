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

    // CREATE ARTICLE ELEMENT
    const article = document.createElement('article')
    article.setAttribute('record-post-id', record.id)

    // CREATE HEADING 2 ELEMENT
    const headline = document.createElement('h2')
    headline.textContent = record.headline

        // add style to headline
        headline.classList.add('underline')

    article.appendChild(headline)


    //to be continued


    mainTag.appendChild(article)
}


// TO DO
// NEED TO CLEAR USERNAME AND LOGIN ONCE USER PRESSES LOGOUT BUTTON
// sessionStorage.clear();