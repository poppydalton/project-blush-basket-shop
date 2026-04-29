import { getSession, setSession, clearSession } from './storage.js';

export function isAuthN() {
    return getSession('isAuthN') === 'true';
}

export function login(username) {
    setSession('username', username);
    setSession('isAuthN', 'true');
}

export function logout() {
    clearSession();
}