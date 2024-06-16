"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { id: 1, name: "Register", href: "/register" },
  { id: 2, name: "Login", href: "/login" },
  { id: 3, name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        {navLinks.map((link) => {
          const { id, href, name } = link;
          const isActive = pathname.startsWith(href);
          return (
            <Link
              href={href}
              key={id}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div>{children}</div>
    </div>
  );
}
