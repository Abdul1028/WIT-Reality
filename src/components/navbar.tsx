"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("top-10 inset-x-0 w-[50vw] mx-auto mt-2 z-50", className)}
    >
      <Menu setActive={setActive}>
        <div>WRIT-Reality</div>
        <div className="flex justify-center items-center gap-6">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <p>Services</p>
          <p>Pricing</p>
        </div>
        <div className="flex justify-end items-center">
          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}
