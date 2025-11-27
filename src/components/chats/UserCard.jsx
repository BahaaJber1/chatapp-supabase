import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";

function UserCard({ user, isSelected, isExpanded }) {
  const { name, profile_pic, email } = user;
  return (
    <Link
      href={`/chats/${name}`}
      className={cn(
        "hover:bg-rouge/10 flex flex-row items-center gap-5 rounded-2xl px-2 py-3",
        { "bg-rouge/30": isSelected },
        { "w-full": isExpanded },
        { "rounded-full py-2": !isExpanded },
      )}
    >
      <Container className={cn("relative h-15 w-15 shrink-0")}>
        <Image
          src={profile_pic}
          alt={name}
          fill
          className={cn("rounded-full object-cover")}
        />
      </Container>
      {isExpanded && (
        <Container className={cn("flex-col gap-2")}>
          <span>{name}</span>
          <span>{email}</span>
        </Container>
      )}
    </Link>
  );
}

export default UserCard;
