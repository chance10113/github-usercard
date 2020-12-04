//const { default: Axios } = require("axios");
import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entry = document.querySelector('.cards')

axios
.get('https://api.github.com/users/chance10113')
.then(res => {
  const gitInfo = res.data
 // const newCard = cardMaker(gitInfo)
  //entry.appendChild(newCard)
  console.log('this is a thing, you know it when you see it', gitInfo)
})
.catch(beef => {
  console.log(beef)
})
// .then(res) => {
//   // future code for when the data actually arrives
//   // freedom to assume that the data is here
// const stuff = res.data;
// const newCard = cardMaker(res.data)
//       entry.appendChild(card)
//       console.log("2. here is the future data", res);
// })
// .catch((drama) => {
//   // handle the drama
//   console.log(drama);
// });


// .then(res => {
//   const gitInfo = res.data
//   const gitCard = gitCardMaker(res.data)
//   entryPoint.appendChild(gitCard)
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
//I G N O R E  T H E   A B O V E !!!!//I G N O R E  T H E   A B O V E !!!!//I G N O R E  T H E   A B O V E !!!!//I G N O R E  T H E   A B O V E !!!!


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(gitInfo){
  //creating elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName =document.createElement('p')
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const anchor = document.createElement('a');
//adding classes
card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
userName.classList.add('username');
//stitching together
card.appendChild(img);
card.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(userName);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);
profile.appendChild(anchor)
//Content
img.src = gitInfo.avatar_url
name.textContent = gitInfo.name;
userName.textContent = gitInfo.userName
location.textContent = gitInfo.location
anchor.textContent = gitInfo.url;
followers.textContent = `Followers: ${gitInfo.followers}`;
following.textContent = `Following: ${gitInfo.following}`;
bio.textContent = `Bio ${gitInfo.bio}`;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
