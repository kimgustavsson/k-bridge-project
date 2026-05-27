/**
 * Conditionally joins class names together.
 * Lightweight alternative to clsx - filters out falsy values and joins with spaces.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
