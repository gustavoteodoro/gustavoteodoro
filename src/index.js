/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
