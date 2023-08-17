"use client";

import { heading } from "./Heading.css";

const Heading = ({ children }) => <h1 className={heading}>{children}</h1>;

export default Heading;
