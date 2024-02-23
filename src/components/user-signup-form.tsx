"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { LoaderIcon, LucideLoader, LogIn, Car } from "lucide-react";
import { auth } from "@/app/FireBaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import { error } from "console";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignupForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const { toast } = useToast();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  }

  function onGoogleButtonClick() {
    alert("clicked");
    setIsGoogleLoading(true);

    // // Simulating asynchronous operation (e.g., API call)
    // setTimeout(() => {
    //   setIsGoogleLoading(false);
    // }, 3000);
  }

  async function handleEmailSignupLogin() {
    try {
      if (email === password) {
        throw new Error("Email and password cannot be empty!");
      }

      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!email.match(validRegex)) {
        throw new Error("Not a valid email");
      }

      if (password.length < 6) {
        throw new Error("Password should be atleast 6 characters");
      }

      if (email === "" || password === "") {
        throw new Error("Email or password cannot be empty");
      }

      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);

      if (res) {
        toast({
          title: "Login succesfull!",
          description: "Redirecting to streamlit for services",
        });
        setIsLoading(false);
      } else {
        toast({
          variant: "destructive",
          title: "User with this below email id already exists!",
          description: "Please use a different email to signin",
          action: <ToastAction altText="Try again">Okayy!</ToastAction>,
        });
        setIsLoading(false);
      }
    } catch (err) {
      const a = new String(err);
      toast({
        variant: "destructive",
        title: "Ahh Ahh !",

        description: a,
        action: <ToastAction altText="Try again">Okayy!</ToastAction>,
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your email here"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button disabled={isLoading} onClick={handleEmailSignupLogin}>
            {isLoading && (
              <LucideLoader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Emaill
          </Button>

          {/* <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Tailwind Connect</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button> */}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        type="button"
        onClick={onGoogleButtonClick}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? (
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogIn className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
