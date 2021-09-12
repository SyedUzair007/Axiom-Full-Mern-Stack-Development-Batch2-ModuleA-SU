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

//function to get the id of the input field
function getIdField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//funtion to check values are valid or not
function checkrequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value===''){
            showError(input,`${getIdField(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(username.value);

    checkrequired([username,email,password,confirmpassword]);
});