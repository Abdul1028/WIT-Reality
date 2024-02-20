import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav navItems={navItems} />
      <Hero />
    </main>
  );
}
