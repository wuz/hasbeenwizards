import { style, styleVariants } from "@vanilla-extract/css";

export const flex = style({
  display: "flex",
  gap: 32,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
});

export const direction = styleVariants({
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
});

export const align = styleVariants({
  start: {
    alignItems: "start",
  },
  center: {
    alignItems: "center",
  },
});
