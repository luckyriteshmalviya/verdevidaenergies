import { motion } from "framer-motion";
import { User, Award, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/Section";
import founder from "@/assets/Founder_image.jpeg";

const Founders = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Leadership
          </span>
          <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">
            Meet Our Founders
          </h1>
          <p className="text-muted-foreground text-lg">
            Visionary leaders driving India's sustainable energy revolution.
          </p>
        </motion.div>
      </div>
    </section>
    <Section background="default">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src={founder}
              alt="Founder & CEO"
            />
          </div>
          <h2 className="font-outfit font-bold text-2xl text-foreground text-center mb-2">
            Founder & CEO
          </h2>
          <p className="text-primary text-center mb-6">VERDEVIDA ENERGIES</p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <Award className="w-4 h-4" />
              20+ Years Experience
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
              <Lightbulb className="w-4 h-4" />
              HVAC Expert
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-outfit font-bold text-2xl text-foreground mb-6">
            Founder's Message
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over 35 years of experience in construction and project
              management, I have led the planning and delivery of large scale
              commercial, residential, hospitality, and institutional projects
              across India. My work spans landmark developments such as Hotel
              Hyatt Raipur, Hotel Radisson Pune, Ishanya Mall in Pune, Platinum
              Park, and major government office complexes, all delivered with a
              strong focus on quality, timelines, and cost efficiency. Holding
              qualifications in Civil Engineering and International Business
              Management, my expertise covers project execution, resource
              planning, contract management, value engineering, and quality
              assurance, ensuring consistent value for stakeholders. Today, my
              focus extends beyond traditional construction toward sustainable
              energy and responsible living. As the founder of Green Life
              Energies, I am driven by the philosophy of verdevida, meaning
              green life. I am passionate about advancing solar, wind, and
              hydrogen solutions while integrating natural and organic materials
              to reduce environmental impact, improve energy efficiency, and
              support healthier lifestyles. My commitment is to build a future
              where progress is defined by innovation, sustainability, and long
              term value for both communities and the planet
            </p>

            <p className="text-primary font-medium">
              Founder, VERDEVIDA ENERGIES
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  </>
);

export default Founders;
