import Logo from "@/assets/images/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = ({ className }) => {
  const navItems = [
    {
      label: "Login",
      href: "/login",
      variant: "chat-primary",
      size: "xl",
    },
    {
      label: "Chats",
      href: "/chats",
    },
  ];

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
      <ul className={cn("flex flex-row-reverse items-center gap-5 space-x-4")}>
        {navItems.map((item) =>
          item.variant ? (
            <li key={item.href}>
              <Button variant={item.variant} size={item.size} asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Header;
