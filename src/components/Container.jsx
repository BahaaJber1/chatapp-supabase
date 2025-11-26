"use client";

import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";

const Container = ({ children, className, ...props }) => {
  return (
    <m.div className={cn("flex w-full flex-col gap-5", className)} {...props}>
      {children}
    </m.div>
  );
}

export default Container;
