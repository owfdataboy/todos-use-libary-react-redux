import html from "../tool/core.js";
import TodoList from "./TodoList.js";

function App() {
    return html`
        <div>Header</div>
        ${TodoList()}
        <div>Footer</div>
    `;
}

export default App;
