//Retreiving HTML element from Form

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Function to update class and message for error
function showError(input, message){
    //gET The Parent element of input field (form-control)
const formControl = input.parentElement;
//Over ride the class and add error
formControl.className = "form-control error"
// Get the small element for the error message
const small = formControl.querySelector('small')
//Over ride the text for small element using the input message
small.innerText = message

}


// Function to update class for success

function showSuccess(input){
    // Get the Parent Element of input field(form-control)
    const formControl = input.parentElement
    // Override the class and add success
    formControl.className = 'form-control success'

}
// Event Listeners
//create Event Listener for submit button

form.addEventListener('submit', function(e){
    //stop page from reloading to submit
    e.preventDefault();
    // Check if username input is empty
    if(username.value === ''){
        showError(username, "User Name is required")
    } else{
        showSuccess(username)
    }
// Check if Email input is empty
    if(email.value === ''){
        showError(email, "Email is required")
    } else{
        showSuccess(email)
    }

    // Check if Password input is empty
    if(password.value === ''){
        showError(password, "Password is required")
    } else{
        showSuccess(password)
    }

    // Check if Confirm Password input is empty
    if(password2.value === ''){
        showError(password2, "Confirm Password is required")
    } else{
        showSuccess(password2)
    }
});