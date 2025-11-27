import React from "react";
import Container from "../common/Container";
import { cn } from "@/lib/utils";

function ChatMessage({ message }) {
  const { sender, text } = message;
  const currentUser = "Bob";
  const isOwnMessage = (message) => message.sender === currentUser;

  return (
    <Container
      className={cn("flex-row wrap-break-word", {
        "justify-end": isOwnMessage(message),
      })}
    >
      <Container
        className={cn(
          "wrap-break-words mb-2 w-fit max-w-[300px] rounded-3xl border border-gray-300 bg-white p-3 text-gray-600 shadow-lg md:max-w-[400px] lg:max-w-[500px]",
        )}
      >
        <span className={cn("wrap-break-word")}>
          {text} <span className="font-bold">{sender}</span>
        </span>
      </Container>
    </Container>
  );
}

export default ChatMessage;
