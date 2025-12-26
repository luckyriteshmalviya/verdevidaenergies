import { motion } from 'framer-motion';
import { User, Award, Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const Founders = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Leadership</span>
          <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">Meet Our Founders</h1>
          <p className="text-muted-foreground text-lg">Visionary leaders driving India's sustainable energy revolution.</p>
        </motion.div>
      </div>
    </section>
    <Section background="default">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <User className="w-16 h-16 text-primary-foreground" />
          </div>
          <h2 className="font-outfit font-bold text-2xl text-foreground text-center mb-2">Founder & CEO</h2>
          <p className="text-primary text-center mb-6">VERDEVIDA ENERGIES</p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"><Award className="w-4 h-4" />20+ Years Experience</div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"><Lightbulb className="w-4 h-4" />HVAC Expert</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="font-outfit font-bold text-2xl text-foreground mb-6">Founder's Message</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>At VerdeVida, we believe that sustainability and profitability are not mutually exclusive. Our journey began with a simple observation: India's growing energy consumption for cooling is unsustainable, both economically and environmentally.</p>
            <p>The HTS technology we developed addresses this challenge head-on. By combining thermal regulation with solar energy principles, we've created a solution that delivers immediate financial benefits while contributing to India's climate action goals.</p>
            <p>Every installation we complete is a step towards a greener India. We're not just selling products; we're building a movement towards sustainable energy consumption that will benefit generations to come.</p>
            <p className="text-primary font-medium">— Founder, VERDEVIDA ENERGIES</p>
          </div>
        </motion.div>
      </div>
    </Section>
  </>
);

export default Founders;
