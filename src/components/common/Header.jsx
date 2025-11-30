"use client";

import Logo from "@/assets/images/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { logoutUser } from "@/store/slices/user.slice";
import Container from "./Container";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";

const navItems = [
  {
    label: "Chats",
    href: "/chats",
  },
];

const Header = ({ className }) => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = user?.user_metadata || "";

  const logoutUserHandler = async () => {
    const result = dispatch(logoutUser()); //.unwarp(); read more on it
    if (result && !loading) {
      router.push("/");
    }
  };

  return (
    <nav
      className={cn(
        "flex items-center justify-between py-5 md:px-5",
        className,
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <ul className={cn("flex flex-row items-center gap-5 space-x-4")}>
        {!user && !loading && (
          <li>
            <Button variant="chat-primary" size="xl" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </li>
        )}
        {user &&
          navItems.map(
            (item) =>
              user && (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ),
          )}

        {user && (
          <li>
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>{username?.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className={cn("w-50")}>
                <Container>
                  <Container
                    className={cn("cursor-pointer flex-row items-center")}
                    onClick={logoutUserHandler}
                  >
                    <TbLogout />
                    Logout
                  </Container>
                </Container>
              </PopoverContent>
            </Popover>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
