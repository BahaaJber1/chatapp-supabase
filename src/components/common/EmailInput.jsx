import ErrorMessage from "@/components/common/ErrorMessage";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailInput = ({ register, errors, preserve }) => {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        autoComplete="off"
        {...register("email")}
      />
      <ErrorMessage message={errors.email?.message} preserve={preserve} />
    </FormItem>
  );
};

export default EmailInput;
