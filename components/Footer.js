import html from "../tool/core.js";
import { connect } from "../tool/store.js";

function Footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count"
                ><strong
                    >${todos.filter((todo) => todo.completed === false)
                        .length}</strong
                >
                item left</span
            >
            <ul class="filters">
                ${Object.keys(filters).map(
                    (type) => html`
                        <li>
                            <a
                                class=${filter === type && "selected"}
                                href="#"
                                onclick="dispatch('SWITCH','${type}')"
                            >
                                ${type[0].toUpperCase() + type.slice(1)}
                            </a>
                        </li>
                    `
                )}
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    `;
}

export default connect()(Footer);
