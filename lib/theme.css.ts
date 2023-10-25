import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "#8e30f8",
    background: "#000",
    text: "#fff",
  },
  font: {
    body: `sans-serif`,
    heading: `"IM Fell English"`,
  },
});
