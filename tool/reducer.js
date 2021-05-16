const actions = {};

export default function reducer(state, action, args) {
    actions[action] && actions[action]();
    return state;
}
