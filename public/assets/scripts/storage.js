export function getSession(key) {
    return sessionStorage.getItem(key);
}

export function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

export function isAuthN() {
    return sessionStorage.getItem('isAuthN') === 'true';
}

export function login(username) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('isAuthN', 'true');
    sessionStorage.setItem('authUpdated', Date.now());
}

export function logout() {
    sessionStorage.setItem('isAuthN', 'false');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('favorites');
    sessionStorage.removeItem('currentCategory');
    sessionStorage.setItem('authUpdated', Date.now());
}