"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((p) => p);
  
  return (
    <nav className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-muted py-6 px-6 md:px-12 max-w-[1200px] mx-auto">
      <Link href="/" className="hover:text-purple transition-colors">Home</Link>
      {paths.map((p, i) => {
        const href = `/${paths.slice(0, i + 1).join("/")}`;
        const isLast = i === paths.length - 1;
        const label = p.charAt(0).toUpperCase() + p.slice(1).replace("-", " ");

        return (
          <div key={href} className="flex items-center gap-2">
            <span className="text-purple-dim">/</span>
            {isLast ? (
              <span className="text-white">{label}</span>
            ) : (
              <Link href={href} className="hover:text-purple transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
