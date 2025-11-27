import Chat from "@/components/chats/Chat";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

const page = async ({ params }) => {
  const { username } = await params;

  return (
    <Container className={cn("min-h-[calc(100vh-90px)]")}>
      <Chat username={username} />
    </Container>
  );
};

export default page;
