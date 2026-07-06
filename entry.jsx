import React from "react";
import { createRoot } from "react-dom/client";
import App from "./investment-platform.jsx";

// تخزين محلي بسيط لحفظ التقدّم
window.storage = window.storage || {
  async get(key) {
    const v = localStorage.getItem(key);
    if (v === null) throw new Error("not found");
    return { key, value: v };
  },
  async set(key, value) { localStorage.setItem(key, value); return { key, value }; }
};

createRoot(document.getElementById("root")).render(React.createElement(App, null));
