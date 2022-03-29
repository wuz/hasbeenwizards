import styled from "styled-components";
import Link from "next/Link";

const Main = styled.main``;
const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2% 5%;
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <nav>
          <Link href="/">Has Been Wizards</Link>
          <Link href="/resources">Resources</Link>
        </nav>
      </header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
};

export default MainLayout;
