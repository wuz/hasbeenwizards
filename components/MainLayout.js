import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo light.png";

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
          <Link href="/">
            <a>
              <Image height="50" width="50" src={logo} alt="Mythic Mimic" />
            </a>
          </Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/notion">Notion for DMs</Link>
          <Link href="https://www.youtube.com/channel/UCE-CG2hIWTJrgKD99hSVaMw">
            Youtube
          </Link>
          <Link href="https://twitter.com/hasbeenwizard">Twitter</Link>
          <Link href="https://startplaying.games/gm/hasbeenwizard">
            Join my table
          </Link>
        </Nav>
      </header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
};

export default MainLayout;
