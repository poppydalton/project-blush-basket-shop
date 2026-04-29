import { getSession, setSession } from './storage.js';

// check if user is logged in 
export function isAuthN() {
    return getSession('isAuthN') === 'true';
}

// saves information 
export function login(username) {
    setSession('username', username);
    setSession('isAuthN', 'true');
}
// logout 
export function logout() {
    sessionStorage.setItem('isAuthN', 'false');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('favorites');
    sessionStorage.removeItem('currentCategory');
}