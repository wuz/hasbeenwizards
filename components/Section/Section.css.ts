import { vars } from "@/lib/theme.css";
import { style } from "@vanilla-extract/css";

export const invert = style({
  color: vars.color.background,
  background: vars.color.text,
});

export const inner = style({
  width: "100%",
  maxWidth: 1000,
  margin: "0 auto",
  padding: "2% 5%",
});
