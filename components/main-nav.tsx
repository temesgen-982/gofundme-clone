"use client";

import Link from "next/link";
import { Menu } from "lucide-react"; // Make sure you have lucide-react installed

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MainNav() {
  // Define your navigation items
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Start a Fundraiser",
      href: "/start",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-self-stretch justify-between">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Replace with your actual logo or icon */}
          <span className="font-bold text-xl text-gofundmeBlue">FundSphere</span>{" "}
          {/* Using a placeholder text logo */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary/80 text-primary/60"
            >
              {item.title}
            </Link>
          ))}
          <Link href="/login"> {/* Login link */}
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/donate"> {/* Donate button */}
            <Button className="bg-gofundmeBlue hover:bg-gofundmeBlue/90">Donate</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader className="px-4">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl text-gofundmeBlue">FundSphere</span>
                  </Link>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu for FundSphere.
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-2 p-4 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link href="/login" className="flex w-full items-center py-2 text-lg font-semibold">
                  Login
                </Link>
                <Link href="/donate" className="flex w-full items-center py-2 text-lg font-semibold">
                  <Button className="w-full bg-gofundmeBlue hover:bg-gofundmeBlue/90">Donate</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

