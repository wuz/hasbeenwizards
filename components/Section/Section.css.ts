import { globalStyle, style } from "@vanilla-extract/css";

export const inner = style({
  width: "100%",
  maxWidth: 1000,
});

globalStyle(`${inner} > * + * `, {
  marginTop: 24,
});
