const signInEmail = document.getElementById('loginName');
const signInPassword = document.getElementById('loginPassword');
const loginButton = document.querySelector('button');
let users = [];

users = JSON.parse(localStorage.getItem('users'));

loginButton.addEventListener('click', function(){
    if(isEmpty() === false) {
        document.getElementById('error').innerHTML = `<span class="text-danger my-3">All Inputs are required</span>`
    } else {
        validUser();
    }
})

function validUser() {
    for(let i = 0; i < users.length; i++) {
        if(signInEmail.value === users[i].email && signInPassword.value === users[i].password) {
            let name = users[i].name;
            localStorage.setItem('userName', name);
            location.href = '../Pages/home.html'
            document.getElementById('error').innerHTML = '<span class="text-success m-3">Success</span>'
            break;
        } else {
            document.getElementById('error').innerHTML = `<span class="text-danger my-3">This email or password doesn't exist</span>`
        }
    }
}

function isEmpty() {
    if(signInEmail.value === '' || signInPassword.value === '') {
        return false;
    }
    else {
        return true;
    }
}