import { login } from './auth.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('password is: 1234');

    const loginButton = document.getElementById('login-button');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const isPassword = passwordInput.getAttribute('type') === 'password';

            passwordInput.setAttribute(
                'type',
                isPassword ? 'text' : 'password'
            );

            const icon = togglePassword.querySelector('i');

            if (icon) {
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');

            if (!username) {
                loginMessage.textContent = 'Please enter a username.';
                return;
            }

            if (password === '1234') {
                login(username);
                window.location.assign('../index.html');
            } else {
                loginMessage.textContent = 'Incorrect password. Try 1234.';
            }
        });
    }
});