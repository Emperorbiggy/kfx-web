"use client";
import { FiLoader } from 'react-icons/fi';

export default function LoaderOverlay() {

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
    >
      <FiLoader size={60} className="animate-spin text-white" />
      {/* 
        Ensure you have the 'animate-spin' utility in your tailwind.config.js if it's not default.
        If 'animate-spin' is not working, you might need to define the keyframes manually 
        or ensure your Tailwind CSS setup includes animations.
        For a basic spin, Tailwind's `animate-spin` should work out of the box.
      */}
      <style jsx global>{`
        /* 
          Tailwind's animate-spin should handle this, 
          but if you need custom animation or it's not working, you can define it here or in a global CSS file.
        */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
