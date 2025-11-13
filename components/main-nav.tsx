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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ListItem,
} from "@/components/ui/navigation-menu"

export function MainNav() {

  const donate: { title: string; href: string; description: string }[] = [
    {
      title: "Categories",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Crisis Relief",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Social Impact Funds",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Supporter Funds",
      href: "/",
      description: "Visually or semantically separates content.",
    },
  ]

  const fundraise: { title: string; href: string; description: string }[] = [
    {
      title: "How to start a Fund",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Fundraising Categories",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Team fundraising",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Fundraising Blog",
      href: "/",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Fundraising tips",
      href: "/",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Fundraising ideas",
      href: "/",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
      title: "Charity fundraising",
      href: "/",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Signup as nonprofit",
      href: "/",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]


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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Donate</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {donate.map((donate) => (
                      <ListItem
                        key={donate.title}
                        title={donate.title}
                        href={donate.href}
                      >
                        {donate.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Fundraise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {fundraise.map((fundraise) => (
                      <ListItem
                        key={fundraise.title}
                        title={fundraise.title}
                        href={fundraise.href}
                      >
                        {fundraise.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-green">FundSphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium absolute right-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/">How FundSphere works</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/">FundSphere Giving Guarantee</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/">Help Center</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold">
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
