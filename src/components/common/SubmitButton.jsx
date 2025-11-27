import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const SubmitButton = ({
  isDirty,
  isValid,
  isSubmitting,
  className,
  text,
  submitText,
}) => {
  return (
    <Button
      variant="chat-primary"
      size="xl"
      type="submit"
      disabled={!isDirty || !isValid || isSubmitting}
      className={cn("max-w-30", className)}
    >
      {isSubmitting ? (
        <>
          <Spinner />
          {submitText}
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
