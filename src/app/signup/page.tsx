import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { Boxes } from "@/components/ui/background-boxes";
import SparklesPreview from "@/components/sparkles-preview";
import { UserSearchIcon } from "lucide-react";
import UserSignupForm from "@/components/user-signup-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

// export default function AuthenticationPage() {
//   return (
//     <>
//       {/* First component should be on right column talking full width and height */}
//       <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//         <div className=" relative hidden h-full flex-col bg-muted p-10  text-white lg:flex dark:border-r">
//           <div className="absolute inset-0 bg-zinc-900" />
//           <div className="relative z-20 flex items-center text-lg font-medium">
//             <SparklesPreview />
//           </div>
//         </div>
//         {/* Second component should be on right column talking full width and height */}
//         <div className="lg:p-8">
//           <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//             <div className="flex flex-col space-y-2 text-center">
//               <h1 className="text-2xl font-semibold tracking-tight">
//                 Create an account
//               </h1>
//               <p className="text-sm text-muted-foreground">
//                 Enter your email below to create your account
//               </p>
//             </div>
//             <UserAuthForm />
//             <p className="px-8 text-center text-sm text-muted-foreground">
//               By clicking continue, you agree to our{" "}
//               <Link
//                 href="/terms"
//                 className="underline underline-offset-4 hover:text-primary"
//               >
//                 Terms of Service
//               </Link>{" "}
//               and{" "}
//               <Link
//                 href="/privacy"
//                 className="underline underline-offset-4 hover:text-primary"
//               >
//                 Privacy Policy
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-[600px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 mt-20 ml-5 ">
        <div className="relative h-full bg-muted text-white dark:border-r lg:w-full lg:flex lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="z-20 flex items-center justify-center w-full h-full text-lg font-medium">
            {/* SparklesPreview component taking full height and width of left column */}
            <SparklesPreview />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                SignUP to WIT-Reality here
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to SignUP
              </p>
            </div>
            <UserSignupForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Already have an account ?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
