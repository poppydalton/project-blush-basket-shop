 export function getSession(key) {
    return sessionStorage.getItem(key);
}

export function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

export function clearSession() {
    sessionStorage.clear();
    sessionStorage.setItem('isAuthN', 'false');
} 