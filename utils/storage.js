const STORAGE_KEY = "TODOS";
export default {
    get() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    },
    set(value) {
        return localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    },
};
