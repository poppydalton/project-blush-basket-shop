document.addEventListener('DOMContentLoaded', function () {
    updateUI();
    attachLogout();

    window.addEventListener('authChanged', updateUI);
});

function isLoggedIn() {
    return sessionStorage.getItem('isAuthN') === 'true';
}

function updateUI() {

    const loginBtn = document.getElementById('btnLogin');
    const logoutBtn = document.getElementById('btnLogout');
    const badge = document.getElementById('authBadge');

    if (isLoggedIn()) {
        if (loginBtn) loginBtn.classList.add('d-none');
        if (logoutBtn) logoutBtn.classList.remove('d-none');
        if (badge) badge.textContent = 'Logged In';
    } else {
        if (loginBtn) loginBtn.classList.remove('d-none');
        if (logoutBtn) logoutBtn.classList.add('d-none');
        if (badge) badge.textContent = 'Logged Out';
    }
}

function attachLogout() {
    document.getElementById('btnLogout')?.addEventListener('click', function () {

        sessionStorage.setItem('isAuthN', 'false');
        sessionStorage.removeItem('username');

        window.dispatchEvent(new Event('authChanged'));

        showLogoutAlert();
    });
}

function showLogoutAlert() {

    const alertBox = document.createElement('div');

    alertBox.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    alertBox.textContent = 'You have been successfully logged out';

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 2500);
}