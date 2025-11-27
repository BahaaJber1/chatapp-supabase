import SignupImage from "@/assets/images/signup-chatting.svg";
import SignupForm from "@/components/auth/SignupForm";
import Container from "@/components/common/Container";
import ImageContainer from "@/components/common/ImageContainer";
import { cn } from "@/lib/utils";

const Signup = () => {
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
      className={cn(
        "max-w-7xl flex-col-reverse items-center justify-around gap-10 md:flex-row",
      )}
    >
      <ImageContainer
        src={SignupImage}
        variants={imageVariants}
        animate="float"
      />

      <SignupForm />
    </Container>
  );
};

export default Signup;
