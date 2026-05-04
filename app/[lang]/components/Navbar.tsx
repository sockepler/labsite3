"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { VALID_LANGS } from "../dictionaries";

type NavKey = "home" | "about" | "research" | "members" | "publications" | "access" | "contact";

const NAV_ORDER: { key: NavKey; path: string }[] = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "research", path: "research" },
  { key: "members", path: "members" },
  { key: "publications", path: "publications" },
  { key: "access", path: "access" },
  { key: "contact", path: "contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded";

export default function Navbar({
  lang,
  nav,
}: {
  lang: string;
  nav: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (route: string) => {
    if (route === "") return pathname === `/${lang}`;
    return pathname === `/${lang}/${route}` || pathname.startsWith(`/${lang}/${route}/`);
  };

  const switchLang = (target: string) => {
    const newPath = pathname.replace(/^\/(ja|en|zh)(?=\/|$)/, `/${target}`);
    router.push(newPath || `/${target}`);
    setOpen(false);
  };

  const linkClass = (active: boolean) =>
    `relative font-medium transition-colors ${focusRing} ${
      active ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        className={`md:hidden text-2xl text-gray-700 ${focusRing} px-2`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className="hidden md:flex items-center gap-6">
        {NAV_ORDER.map((item) => (
          <Link
            key={item.key}
            href={`/${lang}/${item.path}`}
            className={linkClass(isActive(item.path))}
          >
            {nav[item.key]}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 origin-left transition-transform duration-300 ${
                isActive(item.path) ? "scale-x-100" : "scale-x-0"
              }`}
              aria-hidden
            />
          </Link>
        ))}
        <span className="h-5 w-px bg-gray-300 mx-1" aria-hidden />
        <div className="flex gap-1 text-sm">
          {VALID_LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLang(l)}
              className={`px-2 py-1 ${focusRing} ${
                lang === l
                  ? "font-bold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV_ORDER.map((item) => (
              <Link
                key={item.key}
                href={`/${lang}/${item.path}`}
                onClick={() => setOpen(false)}
                className={`py-1 ${linkClass(isActive(item.path))}`}
              >
                {nav[item.key]}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 mt-2 border-t border-gray-200 text-sm">
              {VALID_LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchLang(l)}
                  className={`px-3 py-1 ${focusRing} ${
                    lang === l
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
