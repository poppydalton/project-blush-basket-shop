document.addEventListener('DOMContentLoaded', function () {

    const loginBtn = document.getElementById('login-button');
    const toggle = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    toggle?.addEventListener('click', function () {
        const isHidden = password.type === 'password';
        password.type = isHidden ? 'text' : 'password';
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

            sessionStorage.setItem('username', username);
            sessionStorage.setItem('isAuthN', 'true');

            window.dispatchEvent(new Event('authChanged'));

            window.location.href = '../index.html';

        } else {
            if (msg) msg.textContent = 'Wrong password. Try "1234"';
        }
    });
});