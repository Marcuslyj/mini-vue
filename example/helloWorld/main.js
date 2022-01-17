import { createApp } from "../../lib/mini-vue.esm.js";
import App from "./App.js";

const rootContainer = document.querySelector("#root");
const app = createApp(App)
console.log(app);

// createApp(App).mount(rootContainer);
