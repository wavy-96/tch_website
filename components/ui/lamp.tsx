"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const LampContainer: React.FC<LampContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-0 h-56 w-[28rem] -translate-y-[10rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-0 h-56 w-[28rem] -translate-y-[5rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-0 h-56 w-[28rem] translate-y-[5rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-3xl"
        />
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center px-5 w-full h-full">
        {children}
      </div>
    </div>
  );
};

