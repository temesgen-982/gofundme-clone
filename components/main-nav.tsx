"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export function MainNav() {
  /*const desktopNavItems = [
  ];*/

  const mobileNavItems = [
    { title: "Home", href: "/" },
    { title: "Donate", href: "/" },
    { title: "About", href: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto relative flex h-16 items-center justify-center">
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium absolute left-0">
          <Button variant="ghost" size="icon" className="mr-4 text-gray-700 hover:text-gray-900">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Link href="/">Donate</Link>
          <Link href="/">Fundraise</Link>
        </div>

        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-green">FundSphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium absolute right-0">
          {/*desktopNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary/80 text-primary/60"
            >
              {item.title}
            </Link>
          ))*/}
          <Link href="/">
            <Button variant="ghost" className="hover:bg-gray-100 px-4">Sign In</Button>
          </Link>
          <Link href="/">
            <Button className="font-semibold px-4 py-2 rounded-full bg-white border border-black text-black hover:bg-gray-300">
              Start a Fundraiser
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation and Trigger */}
        <div className="md:hidden flex items-center absolute right-4">
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
                    <span className="font-bold text-xl text-green">FundSphere</span>
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
                <Link href="/">
                  <Button className="font-semibold px-4 py-2 rounded-full">
                    Start a Fundraiser
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div >
    </header >
  );
}
