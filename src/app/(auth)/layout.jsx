import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import { cn } from "@/lib/utils";

const AuthLayout = ({ children }) => {
  return (
    <Container
      className={cn("mx-auto min-h-screen max-w-7xl gap-25 px-5 py-5")}
    >
      <Header />
      {children}
    </Container>
  );
};

export default AuthLayout;
