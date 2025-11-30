"use client";

import AllChats from "@/components/chats/AllChats";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ChatLayout = ({ children }) => {
  const params = useParams();
  const hasActiveChat = params.username ? true : false;
  const { user, loading } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.push("/login");
    }
  }, [user, loading, router]);

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
