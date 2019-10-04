const submitButton = document.getElementById('submit');
const username = document.getElementById("username");
const password = document.getElementById('password');
const text = document.getElementById("message");
let isTrue = false;


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    users.forEach((user) => {
        if (username.value == user.name && password.value == user.password) {
            document.location = 'game.html';
            isTrue = true;
        }
    })
    if (!isTrue) {
        text.classList.add('d-block');
        setTimeout(function () {
            text.classList.remove('d-block');
        }, 1000)
    }
});

// for (let index = 0; index < users.length; index++) {
//     console.log(users[index]);    
// }