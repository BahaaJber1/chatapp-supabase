import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ImageContainer = ({
  className,
  src,
  alt = "Description",
  imageClassName,
  ...props
}) => {
  return (
    <Container
      className={cn(
        "relative h-[300px] w-[400px] lg:h-[400px] lg:w-[500px]",
        className,
      )}
      {...props}
    >
      <Image src={src} alt={alt} fill className={imageClassName} />
    </Container>
  );
};

export default ImageContainer;
