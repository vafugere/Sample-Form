const $ = (selector) => document.querySelector(selector);

const validateForm = function () {
    const fields = ['first_name', 'last_name', 'email', 'confirm_email', 'username', 'password', 'confirm_password'];
    let isValid = true;

    fields.forEach(id => {
        const input = $(`#${id}`);
        if (input.value.trim() === '') {
            input.classList.add('error');
            isValid = false;
        }
    });

    const fname = $('#first_name').value.trim();
    const fnameInput = $('#first_name');
    const fnameError = $('#error_first_name');
    if (fname.length > 80) {
        fnameError.textContent = 'First name cannot exceed 80 characters';
        fnameError.classList.add('error-msg');
        fnameInput.classList.add('error');
        isValid = false;
    }
    const lname = $('#last_name').value.trim();
    const lnameInput = $('#last_name');
    const lnameError = $('#error_last_name');
    if (lname.length > 80) {
        lnameError.textContent = 'Last name cannot exceed 80 characters';
        lnameError.classList.add('error-msg');
        lnameInput.classList.add('error');
        isValid = false;
    }
    const email = $('#email').value.trim();
    const emailInput = $('#email');
    const emailError = $('#error_email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '') {
        if (email.length > 250 || !emailPattern.test(email)) {
            let msg = (email.length > 250) ? 'Email cannot exceed 250 characters' : 'Email must follow standard format: example@domain.com';
            emailError.textContent = msg;
            emailError.classList.add('error-msg');
            emailInput.classList.add('error');
            isValid = false;
        }
    }
    const confirmEmail = $('#confirm_email').value.trim();
    const confirmEmailInput = $('#confirm_email');
    const confirmEmailError = $('#error_confirm_email');
    if (confirmEmail !== email) {
        confirmEmailError.textContent = 'Email address does not match';
        confirmEmailError.classList.add('error-msg');
        confirmEmailInput.classList.add('error');
        isValid = false;
    }
    const username = $('#username').value.trim();
    const usernameInput = $('#username');
    const usernameError = $('#error_username');
    if (username.length > 80) {
        usernameError.textContent = 'Username cannot exceed 80 characters';
        usernameError.classList.add('error-msg');
        usernameInput.classList.add('error');
        isValid = false;
    }
    const password = $('#password').value.trim();
    const passwordInput = $('#password');
    const passwordError = $('#error_password');
    if (password.length > 250) {
        passwordError.textContent = 'Password cannot exceed 250 characters';
        passwordError.classList.add('error-msg');
        passwordInput.classList.add('error');
        isValid = false;
    }
    const confirmPassword = $('#confirm_password').value.trim();
    const confirmPasswordInput = $('#confirm_password');
    const confirmPasswordError = $('#error_confirm_password');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Password does not match';
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