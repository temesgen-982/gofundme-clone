"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

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
  const desktopNavItems = [
    { title: "Donate", href: "/donate" },
    { title: "Fundraise", href: "/start" },
    { title: "About", href: "/about" },
  ];

  const mobileNavItems = [
    { title: "Home", href: "/" },
    { title: "Donate", href: "/donate" },
    { title: "Fundraise", href: "/start" },
    { title: "About", href: "/about" },
  ];

  return (
    <header className="sticky flex items-stretch justify-stretch top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Button variant="ghost" size="icon" className="mr-4 text-gray-700 hover:text-gray-900">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>

        <Link href="/" className="mr-auto flex items-center space-x-2">
          <span className="font-bold text-2xl text-gofundmeBlue">FundSphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {desktopNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary/80 text-primary/60"
            >
              {item.title}
            </Link>
          ))}
          <Link href="/signin">
            <Button variant="ghost" className="hover:bg-gray-100 px-4">Sign In</Button>
          </Link>
          <Link href="/start">
            <Button className="bg-gofundmeBlue hover:bg-gofundmeBlue/90 text-white font-semibold px-4 py-2">
              Start a Fundraiser
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation and Trigger */}
        <div className="md:hidden flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 w-[200px] sm:w-[240px]">
              <SheetHeader className="px-4 pb-4 border-b">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl text-gofundmeBlue">FundSphere</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="grid gap-2 p-4 text-sm font-medium">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link href="/signin" className="flex w-full items-center py-2 text-lg font-semibold">
                  Sign In
                </Link>
                <Link href="/start" className="flex w-full items-center py-2 text-lg font-semibold">
                  <Button className="w-full bg-gofundmeBlue hover:bg-gofundmeBlue/90">Start a Fundraiser</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
