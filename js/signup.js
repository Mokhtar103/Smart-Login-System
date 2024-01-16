const signUpName = document.getElementById('signupName')
const signUpEmail = document.getElementById('signupEmail')
const signUpPassword = document.getElementById('signupPassword')
const signButton = document.querySelector('button');
let users= [];

if (localStorage.getItem('users') === null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('users'));
}
signButton.addEventListener('click', function(e){
    signUp();
})


function signUp() {
    if (isEmpty() === false) {
        document.getElementById('error').innerHTML = `<span class="text-danger m-3">All inputs is required</span>`
        return false;
    } 

    if (isEmailExist() === false) {
        document.getElementById('error').innerHTML = `<span class="text-danger m-3">Email Already Exists</span>`
    }
    else {
        const signUp = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };
        users.push(signUp);
        location.href = '../index.html';
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('error').innerHTML = '<span class="text-success m-3">Success</span>'

    }
    }

function isEmpty() {
    if (signUpName.value === '' || signUpEmail.value === '' || signUpPassword.value === '') {
        return false
    } else {
        return true;
    }
}

function isEmailExist() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}