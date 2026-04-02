import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/70 py-16 backdrop-blur-sm">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 kc-animate-fade-up kc-delay-150">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="KodeCrafters" className="h-10 w-10 object-contain" />
            <span className="font-heading text-lg font-bold">
              Kode<span className="text-primary">Crafters</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building digital excellence through code craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Navigate</h4>
          <div className="space-y-2">
            {["/", "/stacks", "/team", "/about"].map((path) => (
              <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Services</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Web Development</p>
            <p>Mobile Apps</p>
            <p>UI/UX Design</p>
            <p>Cloud Solutions</p>
            <p>AI Chatbots</p>
            <p>Data Analysis</p>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>hello@kodecrafters.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} KodeCrafters. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
