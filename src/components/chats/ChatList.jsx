"use client";

import { users } from "@/dev-data/users";
import UserCard from "./UserCard";
import Container from "../common/Container";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const ChatList = ({ isExpanded }) => {
  const { username } = useParams();
  const usersToDisplay = [...users];

  if (usersToDisplay.length === 0) {
    return (
      <Container className="items-center rounded-lg bg-cyan-600 py-5">
        No users available
      </Container>
    );
  }

  return (
    <Container className={cn("items-center overflow-y-auto px-3")}>
      {usersToDisplay.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={user.name === username}
          isExpanded={isExpanded}
        />
      ))}
    </Container>
  );
};

export default ChatList;
