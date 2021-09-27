const users = document.querySelectorAll('.user');

// fetch('https://jsonplaceholder.typicode.com/users').then(function (resposta) {
//     const promiseBody = resposta.json();

//     promiseBody.then(function (body) {
//         users.forEach((user,index) => {
//             const name = user.querySelector('h1');
//             const username = user.querySelector('p');


//             name.textContent = body[index].name;
//             username.textContent = body[index].username
//         });
//     })
// });

window.onload = function() {
    Teste();
};


async function Teste(){
   const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
 
   console.log(resposta)

}