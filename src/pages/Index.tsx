import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Code2, Smartphone, Palette, Cloud, ArrowRight, Zap, Shield, Users, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import MoonOrbit from "@/components/animations/MoonOrbit";

const services = [
  { icon: Code2, title: "Web Development", desc: "Scalable web applications built with modern frameworks and best practices." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences that users love." },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces designed for engagement and conversion." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Robust cloud infrastructure that scales with your business." },
  { icon: Bot, title: "AI Chatbots", desc: "Intelligent conversational agents that automate support and boost engagement 24/7." },
  { icon: BarChart3, title: "Data Analysis", desc: "AI-powered analytics transforming raw data into actionable business insights." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "30+", label: "Team Members" },
  { value: "5+", label: "Years Experience" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Text */}
          <div className="text-center md:text-left space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              We Craft <span className="text-gradient-gold">Digital</span> Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-none mx-auto md:mx-0 leading-relaxed"
            >
              A software house dedicated to turning bold ideas into powerful, scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/projects" className="kc-btn kc-btn-primary">
                <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2">
                  View Our Work <ArrowRight size={18} />
                </motion.span>
              </Link>
              <Link to="/about" className="kc-btn kc-btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative mx-auto flex items-center justify-center md:justify-end"
          >
            <MoonOrbit className="opacity-95 scale-[0.92] md:scale-100" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 border-y border-border bg-card">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center kc-animate-fade-up">
            <div className="font-heading text-4xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">What We <span className="text-gradient-gold">Build</span></h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">End-to-end digital solutions crafted with precision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              className="kc-card group"
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const r = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <s.icon className="h-10 w-10 text-primary mb-5 drop-shadow-[0_0_18px_hsl(var(--primary)/0.25)]" />
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-24 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Why <span className="text-gradient-gold">KodeCrafters</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Zap, title: "Fast Delivery", desc: "Agile development with rapid iteration cycles." },
            { icon: Shield, title: "Battle-Tested", desc: "Enterprise-grade security and reliability standards." },
            { icon: Users, title: "Dedicated Teams", desc: "A team that becomes an extension of yours." },
          ].map((item) => (
            <div key={item.title} className="text-center space-y-3">
              <item.icon className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Build Something <span className="text-gradient-gold">Great</span>?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Let's turn your vision into reality. Get in touch and start your project today.</p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-gold"
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
