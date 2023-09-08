import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "#8e30f8",
    background: "#111",
    text: "#fff",
  },
  font: {
    body: `"Inter", sans-serif`,
  },
});
