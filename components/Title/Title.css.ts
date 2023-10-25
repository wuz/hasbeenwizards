// import { oldEnglishGothicPixel } from "@/app/app.css";
import { vars } from "@/lib/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const titleBase = style({
  lineHeight: 1.1,
  margin: "0.5em 0",
  letterSpacing: "0.05em",
  fontFamily: vars.font.heading,
});

export const title = styleVariants({
  page: [
    titleBase,
    {
      fontSize: "3rem",
    },
  ],
  section: [
    titleBase,
    {
      fontSize: "2em",
    },
  ],
});
