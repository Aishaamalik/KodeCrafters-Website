import Layout from "@/components/Layout";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  { title: "Senior React Developer", location: "Remote", type: "Full-time", desc: "Build cutting-edge web applications using React, TypeScript, and modern tooling." },
  { title: "Mobile Developer (React Native)", location: "Remote", type: "Full-time", desc: "Craft performant cross-platform mobile apps from concept to deployment." },
  { title: "UI/UX Designer", location: "Hybrid", type: "Full-time", desc: "Design intuitive interfaces and create design systems for enterprise products." },
  { title: "Backend Engineer (Node.js)", location: "Remote", type: "Full-time", desc: "Architect scalable APIs and microservices powering our client solutions." },
  { title: "DevOps Engineer", location: "Remote", type: "Contract", desc: "Manage CI/CD pipelines, cloud infrastructure, and deployment automation." },
];

const Careers = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Join <span className="text-gradient-gold">KodeCrafters</span></h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Build your career while building the future. We're always looking for talented craftspeople.</p>
        </div>

        <div className="space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="group rounded-xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/40 hover:glow-gold">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.desc}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <button className="self-start md:self-center inline-flex items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  Apply <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-10 text-center">
          <h3 className="font-heading text-xl font-bold mb-2">Don't see your role?</h3>
          <p className="text-sm text-muted-foreground mb-6">We're always open to meeting talented people. Send us your resume.</p>
          <a
            href="mailto:careers@kodecrafters.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-gold"
          >
            Send Resume <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
