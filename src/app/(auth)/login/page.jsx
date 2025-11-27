import LoginImage from "@/assets/images/login-chatting.svg";
import LoginForm from "@/components/auth/LoginForm";
import Container from "@/components/common/Container";
import ImageContainer from "@/components/common/ImageContainer";
import { cn } from "@/lib/utils";

const Login = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, type: "spring" },
    },
  };

  const imageVariants = {
    float: {
      y: [-20, 10],
      rotate: [-2, 2],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className={cn("max-w-7xl items-center justify-around gap-10 md:flex-row")}
    >
      <LoginForm />
      <ImageContainer
        src={LoginImage}
        variants={imageVariants}
        animate="float"
      />
    </Container>
  );
};

export default Login;
