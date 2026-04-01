import Layout from "@/components/Layout";
import { Target, Eye, Heart } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">About <span className="text-gradient-gold">Us</span></h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Our story, mission, and the values that drive us forward.</p>
        </div>

        <div className="prose-invert space-y-6 text-muted-foreground leading-relaxed mb-20">
          <p>
            KodeCrafters was founded with a singular vision: to bridge the gap between ambitious ideas and exceptional digital products. Based on a passion for clean code and thoughtful design, we've grown from a small team of developers into a full-service software house.
          </p>
          <p>
            We partner with startups and enterprises alike, bringing technical excellence and creative problem-solving to every engagement. Our team thrives on challenges — the more complex the problem, the more excited we get.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Mission", desc: "To deliver software that empowers businesses to achieve their full potential through technology." },
            { icon: Eye, title: "Vision", desc: "To be the most trusted software partner for companies building the future." },
            { icon: Heart, title: "Values", desc: "Craftsmanship, transparency, continuous learning, and an unwavering commitment to quality." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/40 hover:glow-gold">
              <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
