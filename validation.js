const $ = (selector) => document.querySelector(selector);

const validateForm = function () {
    let isValid = true;
    const fname = $('#first_name').value.trim();
    const fnameInput = $('#first_name');
    const fnameError = $('#error_first_name');
    if (fname === '' || fname.length > 80) {
        let msg = (fname === '') ? 'First Name is required' : 'First Name cannot exceed 80 characters';
        fnameError.textContent = msg;
        fnameError.classList.add('error-msg');
        fnameInput.classList.add('error');
        isValid = false;
    }
    const lname = $('#last_name').value.trim();
    const lnameInput = $('#last_name');
    const lnameError = $('#error_last_name');
    if (lname === '' || lname.length > 80) {
        let msg = (lname === '') ? 'Last Name is required' : 'Last Name cannot exceed 80 characters';
        lnameError.textContent = msg;
        lnameError.classList.add('error-msg');
        lnameInput.classList.add('error');
        isValid = false;
    }
    const email = $('#email').value.trim();
    const emailInput = $('#email');
    const emailError = $('#error_email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || email.length > 250) {
        let msg = (email === '') ? 'Email is required' : 'Email cannot exceed 250 characters';
        emailError.textContent = msg;
        emailError.classList.add('error-msg');
        emailInput.classList.add('error');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        let msg = 'Email must follow standard format: example@domain.com';
        emailError.textContent = msg;
        emailError.classList.add('error-msg');
        emailInput.classList.add('error');
        isValid = false;
    }
    const confirmEmail = $('#confirm_email').value.trim();
    const confirmEmailInput = $('#confirm_email');
    const confirmEmailError = $('#error_confirm_email');
    if (confirmEmail !== email) {
        let msg = 'Email address does not match';
        confirmEmailError.textContent = msg;
        confirmEmailError.classList.add('error-msg');
        confirmEmailInput.classList.add('error');
        isValid = false;
    }
    const username = $('#username').value.trim();
    const usernameInput = $('#username');
    const usernameError = $('#error_username');
    if (username === '' || username.length > 80) {
        let msg = (username === '') ? 'Username is required' : 'Username cannot exceed 80 characters';
        usernameError.textContent = msg;
        usernameError.classList.add('error-msg');
        usernameInput.classList.add('error');
        isValid = false;
    }
    const password = $('#password').value.trim();
    const passwordInput = $('#password');
    const passwordError = $('#error_password');
    if (password === '' || password.length > 250) {
        let msg = (password === '') ? 'Password is required' : 'Password cannot exceed 250 characters';
        passwordError.textContent = msg;
        passwordError.classList.add('error-msg');
        passwordInput.classList.add('error');
        isValid = false;
    }
    const confirmPassword = $('#confirm_password').value.trim();
    const confirmPasswordInput = $('#confirm_password');
    const confirmPasswordError = $('#error_confirm_password');
    if (confirmPassword !== password) {
        let msg = 'Password does not match';
        confirmPasswordError.textContent = msg;
        confirmPasswordError.classList.add('error-msg');
        confirmPasswordInput.classList.add('error');
        isValid = false;
    }
    return isValid;
}

$('#signup_form').addEventListener('submit', function (e) {
    const isValid = validateForm();
    if (!isValid) {
        e.preventDefault();
    }
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
        const errorDiv = document.getElementById(`error_${input.id}`);
        if (errorDiv) {
            errorDiv.textContent = '';
            errorDiv.classList.remove('error-msg');
        } 
    });
});