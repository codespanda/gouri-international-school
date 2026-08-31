import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-navy text-white hover:bg-navy-light",
        gold: "bg-gold text-navy hover:bg-gold-dark",
        outline: "border border-navy/20 bg-white text-navy hover:bg-muted",
        outlineWhite: "border border-white/70 bg-transparent text-white hover:bg-white/10",
        ghost: "hover:bg-muted text-navy",
      },
      size: {
        default: "h-11 px-6 py-2 uppercase text-xs",
        sm: "h-9 px-4 text-xs uppercase",
        lg: "h-12 px-8 text-sm uppercase",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
