import html from "../tool/core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../tool/store.js";
const connector = connect();

function TodoList({ todos, filter, filters }) {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('TOGGLE_ALL', this.checked)"
                ${todos.every(filters.completed) && "checked"}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => TodoItem(todo, index))}
            </ul>
        </section>
    `;
}

export default connector(TodoList);
