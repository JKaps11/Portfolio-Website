"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CurrentItem } from "./CurrentItems";

interface CurrentCardProps {
  item: CurrentItem;
}

export default function CurrentCard({ item }: CurrentCardProps) {
  const handleClick = () => {
    if (item.experienceId) {
      const element = document.getElementById("experiences");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isClickable = !!item.experienceId;

  return (
    <Card
      className={cn(
        "select-none transition-colors",
        isClickable &&
          "cursor-pointer hover:bg-accent/50 hover:border-accent-foreground/20"
      )}
      onClick={isClickable ? handleClick : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{item.name}</CardTitle>
          <span className="rounded-md bg-secondary px-2 py-1 text-xs capitalize text-secondary-foreground">
            {item.type}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
