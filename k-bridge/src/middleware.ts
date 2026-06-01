import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all routes except:
  // - API routes (/api)
  // - Static files (_next/static)
  // - Image optimization (_next/image)
  // - Favicon, etc.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
