import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const Main = styled.main``;
const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2% 5%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  font-family: "Metal Mania", cursive;
  font-size: 20px;
`;

const A = styled.a`
  color: #fff;
  &:not(:last-child):after {
    content: "•";
    display: inline-block;
    margin-left: 12px;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <Nav>
          <Link href="/" passHref>
            <a>
              <Image height="100" width="100" src={logo} alt="Mythic Mimic" />
            </a>
          </Link>
          <Link href="/resources" passHref>
            <A>Resources</A>
          </Link>
          <Link href="/notion" passHref>
            <A>Notion for DMs</A>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCE-CG2hIWTJrgKD99hSVaMw"
            passHref
          >
            <A>Youtube</A>
          </Link>
          <Link href="https://twitter.com/hasbeenwizard" passHref>
            <A>Twitter</A>
          </Link>
          <Link href="https://startplaying.games/gm/hasbeenwizard" passHref>
            <A>Join my table</A>
          </Link>
        </Nav>
      </header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
};

export default MainLayout;
