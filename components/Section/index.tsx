import { ReactNode } from "react";
import { inner } from "./Section.css";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => (
  <section>
    <div className={inner}>{children}</div>
  </section>
);

export default Section;
