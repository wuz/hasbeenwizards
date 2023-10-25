"use client";

import { ReactNode } from "react";
import { title } from "./Title.css";

type TitleProps = {
  children: ReactNode;
  type?: keyof typeof title;
};

const Title = ({ children, type = "section" }: TitleProps) => (
  <h1 className={title[type]}>{children}</h1>
);

export default Title;
