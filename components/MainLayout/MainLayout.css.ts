import { vars } from "@/lib/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  margin: "0 auto",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: 16,
  width: "100%",
  fontFamily: vars.font.body,
  fontSize: 16,
});

export const activeLink = style({
  textDecoration: "underline",
});

export const link = style({
  color: "#fff",
  selectors: {
    "&:not(:last-child):after": {
      display: "inline-block",
      marginLeft: 12,
    },
  },
});

export const header = style({
  position: "sticky",
  top: 0,
  background: vars.color.background,
  width: "100%",
  boxShadow: `1px 5px 10px rgba(0,0,0,0.16)`,
});

export const innerHeader = style({
  maxWidth: 1200,
  margin: "0 auto",
  paddingTop: 16,
  paddingBottom: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const joinLink = style({
  color: "#fff",
  background: vars.color.brand,
  padding: 12,
});
