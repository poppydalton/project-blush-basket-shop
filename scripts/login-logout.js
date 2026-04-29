import { isAuthN, logout } from './auth.js';

document.addEventListener('DOMContentLoaded', function () {
    updateUI();
    attachLogout();
});

function updateUI() {
    const loginBtn = document.getElementById('btnLogin');
    const logoutBtn = document.getElementById('btnLogout');
    const badge = document.getElementById('authBadge');

    if (isAuthN()) {
        loginBtn?.classList.add('d-none');
        logoutBtn?.classList.remove('d-none');
        if (badge) badge.textContent = 'Logged In';
    } else {
        loginBtn?.classList.remove('d-none');
        logoutBtn?.classList.add('d-none');
        if (badge) badge.textContent = 'Logged Out';
    }
}

function attachLogout() {
    document.getElementById('btnLogout')?.addEventListener('click', function () {
        logout();
        updateUI();
    });
}