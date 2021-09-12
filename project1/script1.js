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

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(email.value.trim())){
       showSuccess(email);
   }else{
       showError(email,`${getIdField(email)} is not valid!`);
   }
}

//function to get the id of the input field
function getIdField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//function to check the length and password
function checkLenght(input,min,max){
    if(input.value.length < min){
        showError(input,`${getIdField(input)} needs to be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input,`${getIdField(input)} needs to be at less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

//function to pssword match

function checkpassword(input1,input2){
   if(input1.value!==input2.value){
       showError(input2,'Password Dont Match!');
   }
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
    checkLenght(username,3,10);
    //checkLenght(password,6,30)
    checkEmail(email);
    checkpassword(password,confirmpassword);
});