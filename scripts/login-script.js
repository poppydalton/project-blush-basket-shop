import { login } from './auth.js';

document.addEventListener('DOMContentLoaded', function () {

    console.log('password is 1234');

    const loginBtn = document.getElementById('login-button');
    const toggle = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    toggle?.addEventListener('click', function () {
        const isHidden = password.type === 'password';
        password.type = isHidden ? 'text' : 'password';

        const icon = toggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('bi-eye');
            icon.classList.toggle('bi-eye-slash');
        }
    });

    loginBtn?.addEventListener('click', function () {

        const username = document.getElementById('username').value.trim();
        const pass = password.value;
        const msg = document.getElementById('loginMessage');

        if (!username) {
            if (msg) msg.textContent = 'Enter username';
            return;
        }

        if (pass === '1234') {

            const loginData = {
                username: username,
                password: pass,
                status: "success",
                time: new Date().toISOString()
            };

            console.log(JSON.stringify(loginData));

            login(username);

            window.location.href = '../index.html';

        } else {
            if (msg) msg.textContent = 'Wrong password';
        }
    });
});