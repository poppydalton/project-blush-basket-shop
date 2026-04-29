document.addEventListener('DOMContentLoaded', function () {
    updateSession();
    attachClear();
});

function updateSession() {
    const auth = sessionStorage.getItem('isAuthN') || 'false';
    const user = sessionStorage.getItem('username') || 'none';
    const category = sessionStorage.getItem('currentCategory') || 'none';

    document.querySelectorAll('#sessionAuthValue').forEach(e => e.textContent = auth);
    document.querySelectorAll('#sessionUserValue').forEach(e => e.textContent = user);
    document.querySelectorAll('#sessionCategoryValue').forEach(e => e.textContent = category);
}

function attachClear() {
    const btn = document.getElementById('clearSessionButton');

    btn?.addEventListener('click', function () {
        sessionStorage.clear();
        sessionStorage.setItem('isAuthN', 'false');
        updateSession();
    });
}