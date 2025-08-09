import React from "react";
import Image from "next/image";
import { authBg, kfxLogoWhite } from "@/assets/img";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column */}
      <div className="relative hidden lg:flex flex-col justify-center items-center bg-gradient-main text-white p-8">
        {/* Overlay image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={authBg}
            alt="Auth background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-md text-center">
          <Image
            src={kfxLogoWhite}
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">
            Start your journey with us.
          </h1>
          <p className="text-sm text-white/90">
            Contents for some reasons would be added here Contents for some
            reasons would be added here.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-md w-full mx-auto">{children}</div>
      </div>
    </div>
  );
}
