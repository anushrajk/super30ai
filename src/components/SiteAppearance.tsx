import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import "@/styles/site-reference.css";

/** Presentation only: routes and their existing content own all behaviour. */
export function SiteAppearance({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className={pathname === "/" ? "s30-site" : "s30-site s30-interior"}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;650;700;800&display=swap" />
      </Helmet>
      {children}
    </div>
  );
}