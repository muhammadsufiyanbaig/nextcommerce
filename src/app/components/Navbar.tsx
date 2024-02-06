"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "../../../node_modules/next/link";
import { usePathname } from "../../../node_modules/next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Men",
      href: "/Men",
    },
    {
      name: "Women",
      href: "/Women",
    },
    {
      name: "Teens",
      href: "/Teens",
    },
  ];
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="sm:text-2xl md:text-4xl font-bold">
            Next
            <span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
        <Button variant={'outline'} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:24 rounded-none">           
            <ShoppingBag/>
        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
        Cart
        </span>
        </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
