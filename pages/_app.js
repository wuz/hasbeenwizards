import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  background: #222;
  color: #fff;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const Container = styled.section`
width: 100%;
max-width: 1280px;
margin: 0 auto;
padding: 2% 5%;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
