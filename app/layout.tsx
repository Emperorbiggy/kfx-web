import type { Metadata } from "next";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
import React, { Suspense } from "react";
// import MuiXLicense from "./muiXLicense";
import { Providers } from "./providers";
import LoaderOverlay from "@/components/ui/loader-overlay";

export const metadata: Metadata = {
  title: "KFX RRemittance",
  description: "Interface for managing operations on KFX Remittance",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              marginTop: "80px",
              borderRadius: "6px",
              fontSize: "18px",
              minHeight: "50px",
              maxHeight: "fit-content",
              paddingTop: "4px",
              paddingBottom: "4px",
            },
            error: {
              style: {
                background: "#FFE4E4",
                color: "#B61E1E",
              },
            },
            success: {
              style: {
                background: "#E4FFE7",
                color: "#1EB62D",
              },
            },
          }}
          position="top-right"
        />
        <Providers>
          <Suspense fallback={<LoaderOverlay />}>{children}</Suspense>
        </Providers>
        {/* <MuiXLicense /> */}
      </body>
    </html>
  );
}
