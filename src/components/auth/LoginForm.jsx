"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login.schema";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "../common/Container";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Spinner } from "../ui/spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const { register, handleSubmit, reset, formState } = form;
  const { isDirty, isSubmitting, errors, isValid } = formState;

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Container
      className={cn("flex max-w-md gap-0 rounded-lg border p-5 shadow-2xl")}
    >
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

            <p className="text-destructive text-sm">{errors?.email?.message}</p>
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

            <p className="text-destructive text-sm">
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
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <p className={cn("mt-5 text-sm")}>
        Don't have an account?{" "}
        <Link href="/signup" className={cn("underline")}>
          Register
        </Link>
      </p>
    </Container>
  );
};

export default LoginForm;
