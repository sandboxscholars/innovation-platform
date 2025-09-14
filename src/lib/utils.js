// Import `clsx` to conditionally merge class names
import { clsx } from "clsx";

// Import `twMerge` to intelligently merge Tailwind classes and remove conflicts
import { twMerge } from "tailwind-merge";

/**
 * `cn` is a convenience function for combining multiple class names.
 * 
 * How it works:
 * 1. `clsx(inputs)` handles conditional class names, e.g. { active && "bg-blue-500" }.
 * 2. `twMerge(...)` removes conflicting Tailwind classes like "p-2 p-4" -> "p-4".
 * 
 * Usage:
 *   <div className={cn("p-2", isActive && "bg-blue-500")}>Hello</div>
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
