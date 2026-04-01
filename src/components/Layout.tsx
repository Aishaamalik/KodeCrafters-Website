import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "./animations/Particles";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="kc-bg min-h-screen flex flex-col">
    <div className="kc-stars" aria-hidden="true" />
    <Particles className="fixed inset-0 z-[-1] opacity-70" />
    <Navbar />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
