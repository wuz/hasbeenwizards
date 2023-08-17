"use client";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";

import {
  container,
  nav,
  activeLink,
  link,
  header,
  joinLink,
  innerHeader,
} from "./MainLayout.css";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={header}>
        <header className={innerHeader}>
          <Link href="/">
            <Image height={100} width={100} src={logo} alt="HasBeenWizards" />
          </Link>
          <nav className={nav}>
            <Link className={cx(link, pathname === "/" && activeLink)} href="/">
              Home
            </Link>
            <Link
              className={cx(link, pathname === "/posts" && activeLink)}
              href="/posts"
            >
              Blog
            </Link>
            <Link
              className={cx(link, pathname === "/resources" && activeLink)}
              href="/resources"
            >
              Resources
            </Link>
            <a className={link} href="https://wuz.itch.io">
              itch.io
            </a>
            <a className={link} href="https://www.youtube.com/@hasbeenwizards">
              Youtube
            </a>
            <a className={link} href="https://twitter.com/hasbeenwizards">
              Twitter
            </a>
            <a className={joinLink} href="https://startplaying.games/gm/wuz">
              Join my table!
            </a>
          </nav>
        </header>
      </div>
      <section className={container}>
        <main>{children}</main>
        <footer></footer>
      </section>
    </>
  );
};

export default MainLayout;
