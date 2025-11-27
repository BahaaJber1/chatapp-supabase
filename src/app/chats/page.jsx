import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

const page = async () => {
  return (
    <Container
      className={cn(
        "hidden min-h-[calc(100vh-90px)] flex-row gap-4 px-3 py-2 md:flex",
      )}
    >
      hey
    </Container>
  );
};

export default page;
