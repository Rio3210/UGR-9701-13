
const form =document.getElementById('form');
const email = document.getElementById('email');
const username= document.getElementById('name');
const textArea=document.getElementById('textarea');



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const nameValue = username.value.trim();
    const textAreaValue=textArea.value.trim()


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if( nameValue=== '') {
        setError(username, 'name is required');
    } else {
        setSuccess(username);
    }
    if( textAreaValue=== '') {
        setError(textArea, 'your message is required');
    } else {
        setSuccess(textArea);
    }

};
form && form.addEventListener('submit',e=>{

    e.preventDefault();
    validateInputs();
})