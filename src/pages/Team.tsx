import Layout from "@/components/Layout";

const team = [
  { name: "Ahmed Khan", role: "CEO & Founder", bio: "Visionary leader with 10+ years in software architecture." },
  { name: "Sara Ali", role: "CTO", bio: "Full-stack expert passionate about scalable systems." },
  { name: "Usman Raza", role: "Lead Designer", bio: "Creative mind transforming ideas into stunning interfaces." },
  { name: "Fatima Noor", role: "Project Manager", bio: "Ensures every project ships on time and exceeds expectations." },
  { name: "Hassan Javed", role: "Senior Developer", bio: "Backend specialist with deep expertise in cloud infrastructure." },
  { name: "Ayesha Malik", role: "Mobile Lead", bio: "Crafting seamless cross-platform mobile experiences." },
];

const Team = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Our <span className="text-gradient-gold">Team</span></h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">The talented people behind every line of code.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/40 hover:glow-gold">
              <div className="h-20 w-20 rounded-full bg-secondary mx-auto mb-5 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold">{m.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{m.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
