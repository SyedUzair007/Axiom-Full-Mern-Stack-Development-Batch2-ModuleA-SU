const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

//functions 

//error function
function showError(input,message){
    const formControl  = input.parentElement;
    formControl.className  = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//success function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function to check if email is valid

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(username.value);

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } 
    else if(!isValidEmail(email)){
        showError(email, 'Please Enter Valid Email');
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if (confirmpassword.value === '') {
        showError(confirmpassword, 'Confirm Password is required');
    } else {
        showSuccess(confirmpassword);
    }
});