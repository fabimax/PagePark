"use client";

import * as React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      {...rest}
    />
  );
});

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className="flex flex-col space-y-1.5 p-6"
      {...rest}
    />
  );
});

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <h3
      ref={ref}
      className="text-2xl font-semibold leading-none tracking-tight"
      {...rest}
    />
  );
});

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div 
      ref={ref} 
      className="p-6 pt-0" 
      {...rest} 
    />
  );
});

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };