import styled from "styled-components";
import Link from "next/link";

const Main = styled.main``;
const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2% 5%;
`;

const Nav = styled.nav`
display: flex;
gap: 16px;
align-items: center;
justify-content: center;
width: 100%;
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <Nav>
          <Link href="/">Has Been Wizards</Link>
          <Link href="/resources">Resources</Link>
        </Nav>
      </header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
};

export default MainLayout;
