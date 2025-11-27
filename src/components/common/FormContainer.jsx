import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const FormContainer = ({
  form,
  children,
  handleSubmit,
  onSubmit,
  className,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-5", className)}
      >
        {children}
      </form>
    </Form>
  );
};

export default FormContainer;
