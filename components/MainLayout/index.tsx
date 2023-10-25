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
  innerHeader,
  main,
} from "./MainLayout.css";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <section className={container}>
        <div className={header}>
          <header className={innerHeader}>
            <Link href="/">
              <Image height={90} src={logo} alt="HasBeenWizards" />
            </Link>
            <nav className={nav}>
              <Link
                className={cx(link, pathname === "/" && activeLink)}
                href="/"
              >
                Home
              </Link>
              <Link
                className={cx(link, pathname === "/about" && activeLink)}
                href="/about"
              >
                About
              </Link>
              <Link
                className={cx(link, pathname === "/politics" && activeLink)}
                href="/politics"
              >
                Politics
              </Link>
              <Link
                className={cx(link, pathname === "/posts" && activeLink)}
                href="/posts"
              >
                Blog
              </Link>
              <hr />
              <Link
                className={cx(link, pathname === "/resources" && activeLink)}
                href="/resources"
              >
                Resources
              </Link>
              <hr />
              <a className={link} href="https://wuz.itch.io">
                itch.io
              </a>
              <a
                className={link}
                href="https://www.youtube.com/@hasbeenwizards"
              >
                Youtube
              </a>
              <a className={link} href="https://twitter.com/hasbeenwizards">
                Twitter
              </a>
              <a className={link} href="https://startplaying.games/gm/wuz">
                Join my table!
              </a>
            </nav>
          </header>
        </div>
        <main className={main}>{children}</main>
        <footer></footer>
      </section>
    </>
  );
};

export default MainLayout;
