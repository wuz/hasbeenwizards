import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "#FF3EB5",
    background: "#222",
  },
  font: {
    body: `"Inter", sans-serif`,
  },
});
