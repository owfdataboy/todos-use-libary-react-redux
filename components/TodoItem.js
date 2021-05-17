import html from "../tool/core.js";
import { connect } from "../tool/store.js";

function TodoItem({ completed, title, index, indexEditing }) {
    return html`
        <li
            class="${completed && "completed"}
            ${index === indexEditing && "editing"}"
        >
            <div class="view" ondblclick="dispatch('START_EDITING', ${index})">
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
            <input
                class="edit"
                value=${title}
                onkeyup="event.keyCode === 13 
                && dispatch('END_EDIT', this.value, ${index})"
            />
        </li>
    `;
}

export default connect()(TodoItem);
