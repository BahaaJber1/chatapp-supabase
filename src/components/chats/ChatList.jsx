"use client";

import Container from "../common/Container";

const ChatList = ({ tasks }) => {
  return (
    <Container className="mx-auto w-[80%] rounded-full bg-red-600 p-4">
      {tasks?.map((task) => (
        <p key={task.id}>{task.task}</p>
      ))}
    </Container>
  );
};

export default ChatList;
