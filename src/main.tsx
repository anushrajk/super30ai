import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove static SEO content and loader once React has mounted
document.getElementById("seo-content")?.remove();
const root = document.getElementById("root");
if (root) root.style.visibility = "visible";
const loader = document.getElementById("app-loader");
if (loader) loader.remove();