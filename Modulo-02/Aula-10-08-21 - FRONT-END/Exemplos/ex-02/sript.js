const bodyd = document.querySelector('body');

fetch('https://jsonplaceholder.typicode.com/users').then(function (resposta) {
    const promiseBody = resposta.json();

    promiseBody.then(function (body) {
        body.forEach((user) => {
          const div = document.createElement('div');
          div.classList.add('user')

          const name = document.createElement('h1');
          name.textContent = user.name;

          const username = document.createElement('p');
          username.textContent = user.username
          
          const email = document.createElement('p');
          email.textContent = user.email

          const website = document.createElement('p');
          website.classList.add('p')
          website.textContent = user.website
          
          
          div.append(name, username, email,website);
          bodyd.append(div)
        });
    })
});






// const div = document.createElement('div');
// div.classList.add('user');
// div.textContent = "olá Mundo"

// const body = document.querySelector('body');

// body.append(div)