"use client";

import { login } from "@/actions/auth";
import Container from "@/components/common/Container";
import EmailInput from "@/components/common/EmailInput";
import FormContainer from "@/components/common/FormContainer";
import PasswordInput from "@/components/common/PasswordInput";
import SubmitButton from "@/components/common/SubmitButton";
import { cn } from "@/lib/utils";
import { setUser } from "@/store/slices/user.slice";
import { loginSchema } from "@/zod/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const LoginForm = () => {
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

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await login(data);

    reset();
    if (result) {
      dispatch(setUser(result.user));
      router.push("/chats");
    }
  };

  return (
    <Container
      className={cn("flex max-w-md gap-0 rounded-lg border p-5 shadow-2xl")}
    >
      <h2 className={cn("mb-5 text-3xl")}>Login</h2>
      <FormContainer
        form={form}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <EmailInput register={register} errors={errors} preserve />

        <PasswordInput register={register} errors={errors} preserve />

        <SubmitButton
          isDirty={isDirty}
          isValid={isValid}
          isSubmitting={isSubmitting}
          text="Login"
          submitText="Logging in..."
          className={cn("max-w-full")}
        />
      </FormContainer>

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
