import ErrorMessage from "@/components/common/ErrorMessage";
import { FormItem, FormLabel } from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

const PasswordInput = ({ register, errors, preserve }) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          autoComplete="off"
          {...register("password")}
        />
        <InputGroupAddon align="inline-end" className={cn("cursor-pointer")}>
          {showPassword ? (
            <GrFormView onClick={passwordToggle} />
          ) : (
            <GrFormViewHide onClick={passwordToggle} />
          )}
        </InputGroupAddon>
      </InputGroup>
      <ErrorMessage message={errors.password?.message} preserve={preserve} />
    </FormItem>
  );
};

export default PasswordInput;
