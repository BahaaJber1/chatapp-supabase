"use client";

import { cn } from "@/lib/utils";
import { Form, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import Container from "../common/Container";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/schema/signup.schema";
import { Spinner } from "../ui/spinner";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    mode: "all",
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupSchema),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Container
      className={cn(
        "mx-auto flex max-w-md gap-0 rounded-lg border p-5 shadow-2xl",
      )}
    >
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn("flex flex-col gap-5")}
        >
          <h2 className={cn("mb-5 text-3xl")}>Sign Up</h2>
          <Container className={cn("justify-between md:flex-row")}>
            <FormItem className={cn("w-full")}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                autoComplete="off"
                {...form.register("username")}
              />
              <p className="text-destructive mt-1 text-sm">
                {errors?.username?.message}
              </p>
            </FormItem>
            <FormItem className={cn("w-full")}>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your full name"
                autoComplete="off"
                {...form.register("fullName")}
              />
              <p className="text-destructive mt-1 text-sm">
                {errors?.fullName?.message}
              </p>
            </FormItem>
          </Container>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...form.register("email")}
            />
            <p className="text-destructive mt-1 text-sm">
              {errors?.email?.message}
            </p>
          </FormItem>
          <FormItem>
            <FormLabel>Password</FormLabel>

            <InputGroup>
              <InputGroupInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="off"
                {...register("password")}
              />
              <InputGroupAddon
                align="inline-end"
                className={cn("cursor-pointer")}
              >
                {showPassword ? (
                  <GrFormView onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <GrFormViewHide
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputGroupAddon>
            </InputGroup>

            <p className="text-destructive mt-1 text-sm">
              {errors?.password?.message}
            </p>
          </FormItem>
          <Button
            variant="chat-primary"
            size="xl"
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
            className={cn("max-w-30")}
          >
            {isSubmitting ? (
              <>
                <Spinner />
                Signing up...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <p className={cn("mt-5 text-sm")}>
          Already have an account?{" "}
          <Link href="/login" className={cn("underline")}>
            Login
          </Link>
        </p>
      </Form>
    </Container>
  );
}

export default SignupForm;
