import { globalStyle, style } from "@vanilla-extract/css";

export const inner = style({
  width: "100%",
  maxWidth: 1000,
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
});

globalStyle(`${inner} > * + * `, {
  marginTop: 24,
});
