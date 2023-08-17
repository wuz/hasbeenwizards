import { globalStyle, style } from "@vanilla-extract/css";

export const textInput = style({
  background: "none",
  border: "none",
  color: "inherit",
  borderBottom: "1px solid #fff",
  height: 40,
  width: "100%",
  marginBottom: 24,
});

export const styledTag = style({
  padding: "2px 4px",
  border: "1px solid #fff",
  marginRight: 4,
});

export const resourcesList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

globalStyle(`${resourcesList} li`, {
  padding: "4px 12px",
  marginBottom: 12,
  borderBottom: "1px solid #777",
});
