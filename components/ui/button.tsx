"use client";

import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <button
      ref={ref}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 px-4 py-2"
      {...rest}
    />
  );
});

Button.displayName = "Button";

export { Button };