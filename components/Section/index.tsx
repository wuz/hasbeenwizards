import { ReactNode } from "react";
import { inner } from "./Section.css";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => (
  <section className={inner}>{children}</section>
);

export default Section;
