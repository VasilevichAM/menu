import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: "#ffa733",
          main: "#ff9100",
          dark: "#b26500",
          contrastText: "#000",
        },
        secondary: {
          light: "#424242",
          main: "#212121",
          dark: "#000",
          contrastText: "#fff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          light: "#ffa733",
          main: "#ff9100",
          dark: "#b26500",
          contrastText: "#fff",
        },
        secondary: {
          light: "#fff",
          main: "#fafafa",
          dark: "#f5f5f5",
          contrastText: "#fff",
        },
      },
    },
  },
  shape: {
    borderRadius: 20, // defaults to 4
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
