const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword ');

//functions 

//error function
function showError(input,message){
    const formControl  = input.parentElement;
    formControl.className  = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(username);

    if (username === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email === '') {
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    }

    if (password === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if (confirmpassword === '') {
        showError(confirmpassword, 'Confirm Password is required');
    } else {
        showSuccess(confirmpassword);
    }




});