const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

/* getUser("mofachhalhossain"); */

async function getUser(user) {
  const response = await fetch(APIURL + user);
  const responseData = await response.json();
  createUserCard(responseData);
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardHTML = ` 
    <div class="card">
    <div class="img-container">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
            <li><strong>Public Repos</strong>: ${user.public_repos}</li>
            <li><strong>Followers</strong>: ${user.followers}</li>
            <li><strong>Following</strong>: ${user.following}</li>
        </ul>
    </div>
    </div>
    `;
    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
    const user = search.value;
    if(user){
        getUser(user);
        search.value = '';
    }
});