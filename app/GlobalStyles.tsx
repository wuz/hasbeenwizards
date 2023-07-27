'use client';

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'Old English Gothic';
    src: url('/fonts/oldenglishgothicpixelregular-ow2bo-webfont.woff2') format('woff2'),
         url('/fonts/oldenglishgothicpixelregular-ow2bo-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
html,
body {
  background: #222;
  color: #fff;
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

a {
  color: #FF3EB5;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
