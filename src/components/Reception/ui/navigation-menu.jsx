import * as React from "react";
import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger as NavigationMenuPrimitiveTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  NavigationMenuPortal,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  />
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitiveTrigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitiveTrigger>
  )
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContentWrapper = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuContent
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContentWrapper.displayName = "NavigationMenuContent";

const NavigationMenuViewportWrapper = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-0 top-full flex justify-center", className)}
      {...props}
    >
      <NavigationMenuViewport className="origin-top-center scale-100 rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90" />
    </div>
  )
);
NavigationMenuViewportWrapper.displayName = "NavigationMenuViewportWrapper";

const NavigationMenuIndicatorWrapper = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuIndicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuIndicator>
  )
);
NavigationMenuIndicatorWrapper.displayName = "NavigationMenuIndicatorWrapper";

const NavigationMenuLinkWrapper = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuLink
      ref={ref}
      className={cn("block select-none", className)}
      {...props}
    />
  )
);
NavigationMenuLinkWrapper.displayName = "NavigationMenuLink";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContentWrapper as NavigationMenuContent,
  NavigationMenuLinkWrapper as NavigationMenuLink,
  NavigationMenuIndicatorWrapper as NavigationMenuIndicator,
  NavigationMenuViewportWrapper as NavigationMenuViewport,
  NavigationMenuPortal,
  navigationMenuTriggerStyle,
};
