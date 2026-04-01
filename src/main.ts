import { mount } from "svelte";
import "./lib/globals.css";
import Portfolio from "./app.svelte";

const app = mount(Portfolio, {
  target: document.getElementById("app")!,
});

export default app;
