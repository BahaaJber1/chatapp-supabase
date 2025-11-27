import { cn } from "@/lib/utils";

const ErrorMessage = ({ message, preserve }) => {
  return (
    <p className={cn("text-destructive text-sm")}>
      {message || (preserve ? "\u00A0" : null)}
    </p>
  );
};

export default ErrorMessage;
