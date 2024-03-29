"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Category } from "@/interfaces/category.entity";
import Link from "next/link";

interface Props {
  categories: Category[];
}

export function Navbar({ categories }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => {
          return (
            <NavigationMenuItem key={category.slug}>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-screen lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <Link
                      href={`/?category=${category.slug}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <Image
                            src={category.img.hdUrl}
                            alt={category.name}
                            width={1000}
                            height={1000}
                            className="h-full w-"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
