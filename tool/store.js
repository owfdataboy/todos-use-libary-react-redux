import { createStore } from "./core.js";
import reducer from "./reducer.js";
import middleWare from "./logger.js";

const { attach, connect, dispatch } = createStore(middleWare(reducer));

window.dispatch = dispatch;

export { attach, connect };
