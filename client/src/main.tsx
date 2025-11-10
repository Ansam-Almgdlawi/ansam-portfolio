import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
document.title = import.meta.env.VITE_APP_TITLE;

const favicon = document.querySelector("link[rel='icon']");
if (favicon) favicon.setAttribute("href", import.meta.env.VITE_APP_LOGO);

