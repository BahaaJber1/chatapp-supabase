"use client";

import FormContainer from "@/components/common/FormContainer";
import GeneralFormItem from "@/components/common/GeneralFormItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendMessageSchema } from "@/zod/sendMessage.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SendMessageForm = () => {
  const form = useForm({
    mode: "all",
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(sendMessageSchema),
  });

  const { handleSubmit, register, formState, reset } = form;
  const { errors, isSubmitting, isDirty } = formState;

  const onSubmit = (data) => {
    if (!data) return;
    console.log(data);
    reset();
  };

  return (
    <FormContainer
      form={form}
      className={cn("flex flex-row gap-2")}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      <GeneralFormItem
        registeredField="message"
        placeholder="Type your message..."
        register={register}
        errors={errors}
      />

      <Button type="submit" disabled={isSubmitting || !isDirty}>
        send
      </Button>
    </FormContainer>
  );
};

export default SendMessageForm;
