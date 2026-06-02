import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Lightweight wrappers around Next.js navigation APIs that handle locale prefixing automatically.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
