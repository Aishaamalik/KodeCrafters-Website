import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "FinFlow Dashboard", category: "Web App", desc: "Real-time financial analytics platform for enterprise clients with AI-powered insights.", tech: ["React", "Node.js", "PostgreSQL"] },
  { title: "MediCare Plus", category: "Mobile App", desc: "Patient management system streamlining healthcare operations across 200+ clinics.", tech: ["React Native", "Firebase", "TypeScript"] },
  { title: "ShopVerse", category: "E-Commerce", desc: "Scalable marketplace handling 10K+ daily transactions with seamless checkout.", tech: ["Next.js", "Stripe", "AWS"] },
  { title: "EduSync", category: "SaaS", desc: "Learning management system serving 50K+ students with real-time collaboration.", tech: ["Vue.js", "Python", "Redis"] },
  { title: "LogiTrack", category: "IoT", desc: "Fleet management solution with GPS tracking and predictive maintenance.", tech: ["React", "Go", "MQTT"] },
  { title: "GreenGrid", category: "Web App", desc: "Energy monitoring dashboard helping companies reduce carbon footprint by 30%.", tech: ["Angular", "D3.js", "MongoDB"] },
];

const Projects = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Our <span className="text-gradient-gold">Projects</span></h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">A showcase of solutions we've crafted for clients worldwide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-gold flex flex-col">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
              <h3 className="font-heading text-xl font-bold mt-2 mb-3 flex items-center gap-2">
                {p.title}
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
