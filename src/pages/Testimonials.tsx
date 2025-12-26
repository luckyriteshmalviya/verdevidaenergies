import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const testimonials = [
  { quote: "The HTS panels reduced our electricity bills by 58%. The ROI was faster than promised.", author: "Rajesh Kumar", role: "Facilities Director", company: "L&T" },
  { quote: "A game-changer for our sustainability goals. Highly recommend VerdeVida.", author: "Priya Sharma", role: "Operations Head", company: "Adani Group" },
  { quote: "Professional installation and exceptional after-sales support.", author: "Amit Patel", role: "Plant Manager", company: "Siemens" },
  { quote: "Our hospital's cooling costs dropped significantly without compromising patient comfort.", author: "Dr. Sunita Rao", role: "Administrator", company: "AIIMS" },
];

const Testimonials = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Testimonials</span>
          <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">What Our Clients Say</h1>
        </motion.div>
      </div>
    </section>
    <Section background="muted">
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
            <Quote className="w-10 h-10 text-primary/20 mb-4" />
            <p className="text-foreground text-lg mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">{t.author[0]}</div>
              <div><div className="font-semibold text-foreground">{t.author}</div><div className="text-sm text-muted-foreground">{t.role}, {t.company}</div></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  </>
);

export default Testimonials;
