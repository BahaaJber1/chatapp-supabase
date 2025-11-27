"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import Container from "../common/Container";
import ChatList from "./ChatList";

const AllChats = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container
      className={cn(
        "bg-rouge/20 h-full grow rounded-lg p-5 transition-all duration-300",
        {
          "w-[200px]": !isExpanded,
        },
      )}
    >
      <Container className={cn("flex-row items-center justify-between gap-0")}>
        <Link href="/chats" className={cn("text-2xl font-medium")}>
          All Chats
        </Link>
        <span
          onClick={toggleExpand}
          className={cn("text-rouge cursor-pointer")}
        >
          {isExpanded ? (
            <TbLayoutSidebarRightExpand size={25} />
          ) : (
            <TbLayoutSidebarLeftExpand size={25} />
          )}
        </span>
      </Container>
      <hr />
      <ChatList isExpanded={isExpanded} />
    </Container>
  );
};

export default AllChats;
