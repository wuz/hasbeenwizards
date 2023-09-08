"use client";

import { ReactNode } from "react";
import cx from "classnames";
import {
  flex,
  direction as directionVariants,
  align as alignVariants,
} from "./Flex.css";

type FlexProps = {
  children: ReactNode;
  direction?: keyof typeof directionVariants;
  align?: keyof typeof alignVariants;
};

const Flex = ({ children, direction = "row", align = "start" }: FlexProps) => (
  <div className={cx(flex, directionVariants[direction], alignVariants[align])}>
    {children}
  </div>
);

export default Flex;
