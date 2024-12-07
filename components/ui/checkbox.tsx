"use client";

import * as React from "react";

const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      type="checkbox"
      ref={ref}
      className="h-4 w-4 rounded border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      {...rest}
    />
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };