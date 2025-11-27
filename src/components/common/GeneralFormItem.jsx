import ErrorMessage from "@/components/common/ErrorMessage";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const GeneralFormItem = ({
  label,
  type = "text",
  placeholder,
  register,
  registeredField,
  errors,
  className,
  preserve,
}) => {
  return (
    <FormItem className={cn("w-full", className)}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        type={type}
        placeholder={placeholder || `Enter your ${label?.toLowerCase()}`}
        autoComplete="off"
        {...register(registeredField)}
      />
      <ErrorMessage
        message={errors[registeredField]?.message}
        preserve={preserve}
      />
    </FormItem>
  );
};

export default GeneralFormItem;
