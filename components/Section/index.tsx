"use client";

import { ReactNode } from "react";
import cx from "classnames";
import { invert, inner } from "./Section.css";

type SectionProps = {
  children: ReactNode;
  inverted?: boolean;
};

const Section = ({ children, inverted = false }: SectionProps) => (
  <section className={cx({ [invert]: inverted })}>
    <div className={inner}>{children}</div>
  </section>
);

export default Section;
