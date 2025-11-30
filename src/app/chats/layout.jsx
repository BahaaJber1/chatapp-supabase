"use client";

import AllChats from "@/components/chats/AllChats";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const ChatLayout = ({ children }) => {
  const params = useParams();
  const hasActiveChat = params.username ? true : false;

  return (
    <>
      <Header />
      <Container className={cn("h-[calc(100vh-120px)] flex-row")}>
        <Container
          className={cn("w-[500px] grow", {
            "hidden md:flex": hasActiveChat,
          })}
        >
          <AllChats />
        </Container>
        <Container className={cn("grow", { "md:flex": hasActiveChat })}>
          {children}
        </Container>
      </Container>
    </>
  );
};

export default ChatLayout;
