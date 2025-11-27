import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className={cn("flex items-center justify-between px-10 py-5 md:px-5")}>
      <Link href="/">Chattie</Link>
      <ul className={cn("flex items-center space-x-4")}>
        <li>
          <Button variant="chat-primary" size="xl" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
