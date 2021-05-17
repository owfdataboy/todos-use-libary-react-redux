import html from "../tool/core.js";
import TodoList from "./TodoList.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { connect } from "../tool/store.js";

function App({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()} ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `;
}

export default connect()(App);
