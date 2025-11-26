"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login.schema";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "../Container";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const { register, handleSubmit, reset } = form;
  const {
    formState: { isDirty, isSubmitting, errors, isValid },
  } = form;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container className={cn("flex-end mx-auto max-w-md gap-0")}>
      <h2 className={cn("mb-5 text-3xl")}>Login</h2>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn("flex flex-col gap-5")}
        >
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...register("email")}
            />

            <p className="text-destructive mt-1 text-sm">
              {errors?.email?.message}
            </p>
          </FormItem>
          <FormItem>
            <FormLabel>Password</FormLabel>
            <Container className={cn("flex-row items-center gap-0")}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="off"
                {...register("password")}
              />
              <span
                className={cn("cursor-pointer rounded-md border p-0.5")}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <GrFormView size={30} />
                ) : (
                  <GrFormViewHide size={30} />
                )}
              </span>
            </Container>
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
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
      <p className={cn("mt-5 text-sm")}>
        Already have an account?{" "}
        <Link href="/signup" className={cn("underline")}>
          Register
        </Link>
      </p>
    </Container>
  );
};

export default Login;
