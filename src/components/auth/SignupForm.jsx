"use client";

import Container from "@/components/common/Container";
import EmailInput from "@/components/common/EmailInput";
import FormContainer from "@/components/common/FormContainer";
import GeneralFormItem from "@/components/common/GeneralFormItem";
import PasswordInput from "@/components/common/PasswordInput";
import SubmitButton from "@/components/common/SubmitButton";
import { cn } from "@/lib/utils";
import { SignupSchema } from "@/zod/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignupForm() {
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
      <FormContainer
        form={form}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <h2 className={cn("mb-5 text-3xl")}>Sign Up</h2>
        <Container className={cn("items-center justify-between md:flex-row")}>
          <GeneralFormItem
            label="Username"
            registeredField="username"
            register={register}
            errors={errors}
            preserve
          />

          <GeneralFormItem
            label="Full Name"
            registeredField="fullName"
            register={register}
            errors={errors}
            preserve
          />
        </Container>

        <EmailInput register={register} errors={errors} preserve />

        <PasswordInput register={register} errors={errors} preserve />

        <SubmitButton
          isDirty={isDirty}
          isValid={isValid}
          isSubmitting={isSubmitting}
          text="Sign Up"
          submitText="Signing up..."
          className={cn("max-w-full")}
        />
      </FormContainer>
      <p className={cn("mt-5 text-sm")}>
        Already have an account?{" "}
        <Link href="/login" className={cn("underline")}>
          Login
        </Link>
      </p>
    </Container>
  );
}

export default SignupForm;
