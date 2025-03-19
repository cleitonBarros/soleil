import React from "react";
import { cn } from "../../lib/utils";

interface WrapperProps {
  as?: React.ElementType;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<WrapperProps> = React.memo(
  ({ as: Tag = "div", className, children }) => {
    return (
      <Tag
        className={cn(
          "mx-auto h-full w-full max-w-7xl px-6 md:px-2.5",
          className,
        )}
      >
        {children}
      </Tag>
    );
  },
);

Container.displayName = "Container";
export default Container;
