"use client";
import { HoverEffect } from "@/components/ui/card-hover-efffect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Pro",
    description: "A pro tier with 34000 WIT Cents",
    link: "https://stripe.com",
  },
  {
    title: "Premium",
    description: "A premium tier with unlimited cents.",
    link: "https://netflix.com",
  },
  {
    title: "Premium +",
    description: "A premium + tier dynamic user support also",
    link: "https://google.com",
  },
];
