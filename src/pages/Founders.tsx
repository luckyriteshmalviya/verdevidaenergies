import { motion } from 'framer-motion';
import { User, Award, Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import founder from "@/assets/Founder_image.jpeg"

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
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <img className="w-48 h-48 rounded-full object-cover" src={founder} alt="Founder & CEO" />
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
            <p>I bring over 35 years of progressive experience in the construction and project management industry, specializing in planning, execution, and leadership for high-profile developments across India. My portfolio reflects a proven track record in delivering large-scale commercial, residential, hospitality, and institutional projects from inception to completion — consistently meeting rigorous quality standards, timelines, and cost parameters.  

With formal qualifications in Civil Engineering and International Business Management, I have successfully managed landmark projects such as Hotel Hyatt Raipur, Hotel Radisson Pune, Ishanya Mall in Pune, Platinum Park, and major government office complexes. My expertise spans project scheduling, resource planning, vendor management, contract administration, value engineering, and quality assurance — ensuring optimal outcomes and satisfied stakeholders.  

In recent years, I have expanded my vision beyond traditional construction to address one of the most urgent global priorities: sustainable energy and eco-friendly living. As the founder of Green Life Energies, I am passionate about developing solutions using solar, wind, hydrogen technologies, alongside natural and organic materials. My mission is to create projects and products that not only meet functional and aesthetic objectives, but also reduce environmental impact, lower energy costs, and promote healthier lifestyles.  

This diversification reflects my belief that infrastructure and energy must evolve in harmony with a cleaner, greener future. By integrating sustainability into both construction and product development, I aim to contribute to climate change mitigation while fostering innovation in energy efficiency. Clients and partners value my ability to unite technical excellence, business strategy, and environmental stewardship — ensuring every venture delivers long-term value for stakeholders and the planet.  

I am committed to building a future where progress is defined not only by economic growth, but by responsible, sustainable, and impactful development.</p>
            
                        <p className="text-primary font-medium">— Founder, VERDEVIDA ENERGIES</p>
          </div>
        </motion.div>
      </div>
    </Section>
  </>
);

export default Founders;
