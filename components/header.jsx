// import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = async () => {
  // await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-[#00FFFF]/20 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={100}
            height={100}
            className="h-16 w-40 object-contain transition-all hover:scale-105"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a
              href="#features"
              className="text-[#01257D] hover:text-[#00FFFF] font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-[#01257D] hover:text-[#00FFFF] font-medium transition-colors"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-[#01257D] hover:text-[#00FFFF] flex items-center gap-2"
            >
              <Button
                variant="ghost"
                className="border border-[#00FFFF]/30 bg-white/80 hover:bg-[#f0f8ff] text-[#01257D]"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline ml-1">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2 bg-[#01257D] hover:bg-[#01257D]/90 text-white shadow-md border border-[#00FFFF]/30">
                <PenBox size={18} />
                <span className="hidden md:inline ml-1">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-[#00FFFF]/30 text-[#01257D] hover:bg-[#f0f8ff]"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-[#00FFFF]/30 ring-offset-2",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
