import { getTasks } from "@/actions/action";
import ChatList from "@/components/chats/ChatList";

const page = async () => {
  const tasks = await getTasks();
  return <ChatList tasks={tasks} />;
};

export default page;
