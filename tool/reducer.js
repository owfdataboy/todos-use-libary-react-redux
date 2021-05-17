import Storage from "../utils/storage.js";

const init = {
    todos: Storage.get(),
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
};

const actions = {
    ADD({ todos }, [title]) {
        todos.push({ title, completed: false });
        Storage.set(todos);
    },
    TOGGLE({ todos }, [index]) {
        todos.forEach((todo, i) => {
            if (index === i) {
                todo.completed = !todo.completed;
            }
        });
        Storage.set(todos);
    },
    TOGGLE_ALL({ todos }, [completed]) {
        todos.forEach((todo) => {
            todo.completed = completed;
        });
        Storage.set(todos);
    },
    DELETE({ todos }, [index]) {
        todos.splice(index, 1);
        Storage.set(todos);
    },
    SWITCH(state, [type]) {
        state.filter = type;
    },
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}
