"use client";

import React from "react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion as m } from "motion/react";
import Image from "next/image";

const Home = () => {
  return (
    <Container className={cn("mx-auto flex-col items-center md:flex-row")}>
      <Container className={cn("")}>
        <h1 className={cn("text-6xl font-semibold")}>
          Awesome app for your modern{" "}
          <m.span
            className={cn("font-bold")}
            animate={{
              color: ["#0f828c", "#76153C"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
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
        <Container
          className={cn(
            "relative h-[300px] w-[400px] lg:h-[400px] lg:w-[500px]",
          )}
        >
          <Image src="/image.jpg" alt="Description" fill />
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
