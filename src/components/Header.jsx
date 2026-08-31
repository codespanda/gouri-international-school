import { useState } from "react";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus" },
  { label: "News & Events", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden bg-navy text-white sm:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gold">
            <Calendar className="h-3.5 w-3.5" />
            <span>Admissions Open 2025-26</span>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <a href="#parents" className="hover:text-gold">Parents Portal</a>
            <a href="#careers" className="hover:text-gold">Careers</a>
            <a href="#alumni" className="hover:text-gold">Alumni</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-white/95 backdrop-blur">
        <div className="container-page flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-sm">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm0 7.5L4.5 8 12 5l7.5 3-7.5 2.5Z" />
                <path d="M5 10.18v4.32c0 2 3.13 4 7 4s7-2 7-4v-4.32l-7 3.18-7-3.18Z" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg font-bold text-navy sm:text-xl">
                GOURI
              </p>
              <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                International School
              </p>
              <p className="hidden text-[10px] italic text-muted-foreground sm:block">
                Nurturing Minds. Building Futures.
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy/90 transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="gold" size="default">
              Enquire Now <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="text-navy lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-white lg:hidden">
            <nav className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-navy hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="default" className="mt-2 w-full">
                Enquire Now <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
