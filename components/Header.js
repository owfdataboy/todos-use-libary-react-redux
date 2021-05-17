import html from "../tool/core.js";

function Header() {
    return html`
        <header class="header">
            <h1>Todos</h1>
            <input
                class="new-todo"
                placeholder="What needs to be done?"
                autofocus
                onkeyup="event.keyCode === 13 && dispatch('ADD', this.value)"
            />
        </header>
    `;
}

export default Header;
