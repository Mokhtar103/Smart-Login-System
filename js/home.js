const logOutBtn = document.querySelector('.logout');
document.querySelector('.user-name').innerHTML = localStorage.getItem('userName');

logOutBtn.addEventListener('click', function(){
    localStorage.removeItem('userName');
    location.href = '../index.html';
})