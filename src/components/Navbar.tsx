import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 kc-glass border-b border-border/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="KodeCrafters" className="h-[72px] w-[72px] object-contain" />
          <span className="font-heading text-xl font-bold tracking-tight">
            Kode<span className="text-primary">Crafters</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 group">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-medium text-sm tracking-wide transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span className="relative">
                {link.label}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary/20 via-primary to-[hsl(var(--gold-glow))] transition-transform duration-300 ${
                    pathname === link.to ? "scale-x-100" : "group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
          <Link
            to="/careers"
            className="kc-btn kc-btn-primary px-5 py-2.5 text-sm"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
