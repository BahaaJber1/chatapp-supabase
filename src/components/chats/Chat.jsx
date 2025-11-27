import { messages } from "@/dev-data/messages";
import { cn } from "@/lib/utils";
import Container from "../common/Container";
import ChatMessage from "./ChatMessage";
import SendMessage from "./form/SendMessageForm";

const Chat = ({ username }) => {
  return (
    <Container className="bg-cyan/20 h-[calc(100vh-120px)] rounded-lg p-5">
      <h2 className={cn("text-2xl font-medium")}>{username}</h2>
      <hr />

      <Container className={cn("grow overflow-y-auto rounded-2xl p-5")}>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </Container>

      <Container className={cn("rounded-lg p-5")}>
        <SendMessage />
      </Container>
    </Container>
  );
};

export default Chat;
