import { render } from "preact";
import { App } from "./app.tsx";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

render(<App />, document.getElementById("app")!);
