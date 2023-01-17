const form=document.getElementById('form__signup');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');

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

const digits_only = string => [...string].every(c => '0123456789+-*/$%!&'.includes(c));
const validateSignUpInputs=()=>{
    
    const firstnameVal=firstname.value.trim();
    const lastnameVal=lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
    if (firstnameVal===''){
        setError(firstname,'Firstname is required.');

    }else if(digits_only(firstnameVal)){
        setError(firstname,'Firstname should only contain letter.');
}
    else{
        setSuccess(firstname)
    }
    if (lastnameVal===''){
        setError(lastname,'Firstname is required.');

    }else{
        setSuccess(lastname)
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();

    validateSignUpInputs();
});


