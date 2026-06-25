import { mount } from "svelte";
import "./lib/globals.css";
import Placeholder from "./placeholder.svelte";

const app = mount(Placeholder, {
  target: document.getElementById("app")!,
});

export default app;
