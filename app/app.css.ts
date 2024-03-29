import { vars } from "@/lib/theme.css";
import { globalFontFace, globalStyle } from "@vanilla-extract/css";

// @font-face {
//     font-family: 'Old English Gothic';
//
// }

export const oldEnglishGothicPixel = "Old English Gothic Pixel";

globalFontFace(oldEnglishGothicPixel, {
  src: `url('/fonts/oldenglishgothicpixelregular-ow2bo-webfont.woff2') format('woff2'),
          url('/fonts/oldenglishgothicpixelregular-ow2bo-webfont.woff') format('woff')`,
  fontWeight: "normal",
  fontStyle: "normal",
});

globalStyle("*, *:after, *:before", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  background: vars.color.background,
  color: vars.color.text,
  padding: 0,
  margin: 0,
  fontFamily: vars.font.body,
  fontSize: 16,
});

globalStyle("a", {
  color: "#FF3EB5",
  textDecoration: "none",
});

globalStyle("hr", {
  border: "none",
  borderBottom: `1px solid ${vars.color.text}`,
  width: "100%",
});
