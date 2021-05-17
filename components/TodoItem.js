import html from "../tool/core.js";

function TodoItem({ title, completed }, index) {
    return html`
        <li class=${completed && "completed"}>
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${completed && "checked"}
                    onchange="dispatch('TOGGLE', ${index})"
                />
                <label>${title}</label>
                <button
                    class="destroy"
                    onclick="dispatch('DELETE', ${index})"
                ></button>
            </div>
            <input class="edit" value="Create a TodoMVC template" />
        </li>
    `;
}

export default TodoItem;
