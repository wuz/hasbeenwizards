'use client';

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
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 16px;
`;

const A = styled(Link)`
  color: #fff;
  &:not(:last-child):after {
    content: "•";
    display: inline-block;
    margin-left: 12px;
  }
`;

const Header = styled.header({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  marginTop: 40,
});

const JoinLink = styled(Link)({
  position: "fixed",
  top: 0,
  color: "#fff",
  background: "#FF3EB5",
  left: 40,
  padding: 20,
});

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image height={150} width={150} src={logo} alt="HasBeenWizards" />
        </Link>
        <Nav>
          <A href="/posts">Blog</A>
          <A href="/resources">Resources</A>
          <A href="https://wuz.itch.io">itch.io</A>
          <A href="https://www.youtube.com/@hasbeenwizards">Youtube</A>
          <A href="https://twitter.com/hasbeenwizards">Twitter</A>
        </Nav>
        <JoinLink href="https://startplaying.games/gm/wuz">
          Join my table!
        </JoinLink>
      </Header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
};

export default MainLayout;