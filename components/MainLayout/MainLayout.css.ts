import { vars } from "@/lib/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "200px 1fr",
    },
  },
});

export const nav = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  fontFamily: vars.font.body,
  fontSize: 16,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "90vw",
      justifyContent: "center",
    },
  },
});

globalStyle(`${nav} hr`, {
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
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
  height: "100vh",
  boxShadow: `1px 5px 10px rgba(0,0,0,0.16)`,
  padding: 24,
  "@media": {
    "screen and (max-width: 768px)": {
      height: 200,
      width: "100vw",
      padding: 0,
    },
  },
});

export const innerHeader = style({
  maxWidth: 1200,
  margin: "0 auto",
  paddingTop: 16,
  paddingBottom: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const main = style({
  padding: "2% 5%",
  maxWidth: "100vw",
});
