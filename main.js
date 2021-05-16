import App from "./components/App.js";
import { attach } from "./tool/store.js";

attach(App, document.getElementById("root"));
