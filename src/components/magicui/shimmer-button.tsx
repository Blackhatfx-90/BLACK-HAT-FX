"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#EAB308",
      shimmerSize = "0.1em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(11, 16, 29, 0.95)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spotlight-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
            "--border-radius": borderRadius,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative cursor-pointer overflow-hidden border border-white/10 px-6 py-3 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 rounded-[var(--border-radius)] bg-[var(--bg)]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-spin [aspect-ratio:1] [inset:0_auto_auto_0] [mask:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]">
            {/* spark before */}
            <div className="absolute -inset-full w-auto rotate-0 animate-shimmer bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--spotlight-color)_360deg)]" />
          </div>
        </div>
        {children}

        {/* highlight */}
        <div className="absolute inset-0 font-medium rounded-[var(--border-radius)] p-px transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
