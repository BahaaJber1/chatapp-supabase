"use client";

import HomeImage from "@/assets/images/home-chatting.svg";
import ImageContainer from "@/components/common/ImageContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import Link from "next/link";
import Container from "../common/Container";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, type: "spring" } },
};

const spanVariants = {
  hidden: { color: "#0f828c" },
  visible: {
    color: "#76153C",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: { y: -20 },
  visible: {
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <Container
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className={cn("mx-auto flex-col items-center gap-10 md:flex-row")}
    >
      <Container className={cn("justify-center gap-10")}>
        <h1 className={cn("text-6xl font-semibold")}>
          Awesome app for your modern{" "}
          <m.span
            variants={spanVariants}
            initial="hidden"
            animate="visible"
            className={cn("font-bold")}
          >
            lifestyle
          </m.span>
        </h1>
        <p className={cn("text-lg leading-relaxed text-gray-500")}>
          Fast, private, and delightful messaging. Create rooms, share files,
          and stay in sync with real-time updates.
        </p>
        <Container className={cn("flex-row")}>
          <Button variant="chat-primary" size="xl" asChild>
            <Link href="/login">Get Started</Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="/">Discover More</Link>
          </Button>
        </Container>
      </Container>

      <Container className={cn("items-center")}>
        <ImageContainer
          src={HomeImage}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </Container>
    </Container>
  );
};

export default Home;
