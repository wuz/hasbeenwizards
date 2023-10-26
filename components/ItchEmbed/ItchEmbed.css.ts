import { style } from "@vanilla-extract/css";

export const embed = style({
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});
