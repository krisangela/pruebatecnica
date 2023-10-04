import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import "./index.css";

// Define tu fuente personalizada aquí
const customFont = "'Manrope', sans-serif";

// Crea un tema personalizado y asigna la fuente
const theme = createTheme({
  typography: {
    fontFamily: customFont,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App /> {/* Renderiza tu componente principal aquí */}
    </ThemeProvider>
  </React.StrictMode>
);
