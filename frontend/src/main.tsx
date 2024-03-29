import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Background from "./components/Background.tsx";
import { ThemeProvider } from "./components/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider initialTheme="dark">
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
