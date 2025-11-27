import SignupForm from "@/components/auth/SignupForm";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container
      className={cn(
        "max-w-7xl flex-col-reverse items-center justify-around md:flex-row",
      )}
    >
      <Container
        className={cn("relative h-[300px] w-[400px] lg:h-[400px] lg:w-[500px]")}
        animate={{ y: [-20, 10], rotate: [-2, 2] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image src="/chatting2.svg" alt="Description" fill />
      </Container>
      <SignupForm />
    </Container>
  );
};

export default page;
