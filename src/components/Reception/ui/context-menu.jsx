import * as React from "react";
import {
  Content,
  Group,
  Item,
  Label,
  Portal,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  Root,
} from "@radix-ui/react-context-menu";

import { Check, Circle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Main ContextMenu Root
const ContextMenu = Root;

const ContextMenuTrigger = Trigger;

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  </Portal>
));
ContextMenuContent.displayName = Content.displayName;

const ContextMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
ContextMenuItem.displayName = Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Check className="h-4 w-4" />
      </span>
      {children}
    </CheckboxItem>
  )
);
ContextMenuCheckboxItem.displayName = CheckboxItem.displayName;

const ContextMenuRadioGroup = RadioGroup;

const ContextMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </RadioItem>
  )
);
ContextMenuRadioItem.displayName = RadioItem.displayName;

const ContextMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold text-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
ContextMenuLabel.displayName = Label.displayName;

const ContextMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
);
ContextMenuSeparator.displayName = Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }) => (
  <span
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    )}
    {...props}
  />
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

const ContextMenuGroup = Group;

const ContextMenuPortal = Portal;

const ContextMenuSub = Sub;

const ContextMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </SubTrigger>
  )
);
ContextMenuSubTrigger.displayName = SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1 fade-in-0",
        className
      )}
      {...props}
    />
  )
);
ContextMenuSubContent.displayName = SubContent.displayName;

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};
