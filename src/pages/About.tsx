import { motion } from 'framer-motion';
import { Target, Eye, Leaf, Heart, Globe, Award } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/config/constants';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'Every decision we make prioritizes environmental impact and long-term ecological balance.',
    },
    {
      icon: Heart,
      title: 'Customer Commitment',
      description: 'We build lasting relationships by delivering value and exceeding expectations.',
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Working towards a world where clean energy is accessible to everyone, everywhere.',
    },
    {
      icon: Award,
      title: 'Excellence in Innovation',
      description: 'Continuously pushing boundaries to create breakthrough energy solutions.',
    },
  ];

  const timeline = [
    { year: '2018', event: 'Company founded with a vision to revolutionize HVAC energy efficiency' },
    { year: '2019', event: 'First HTS panel prototype developed and tested' },
    { year: '2020', event: 'Successful pilot projects with L&T and Siemens' },
    { year: '2021', event: 'Expanded operations to multiple cities across India' },
    { year: '2022', event: 'Partnership with AIIMS for healthcare facility solutions' },
    { year: '2023', event: 'Recognized for contribution to sustainable development goals' },
    { year: '2024', event: 'Scaling nationwide with 100+ successful installations' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Building a <span className="gradient-text">Greener Tomorrow</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              {COMPANY_INFO.name} was founded with a singular mission: to transform how 
              India consumes energy for cooling, making sustainable solutions accessible 
              to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section background="muted">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-outfit font-bold text-2xl md:text-3xl text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To revolutionize energy consumption in the HVAC industry by providing innovative, 
              sustainable solutions that dramatically reduce electricity costs while contributing 
              to India's climate action goals. We aim to make green energy accessible to every 
              business, from small enterprises to large corporations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="font-outfit font-bold text-2xl md:text-3xl text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the leading provider of hybrid thermal solar solutions in Asia, driving 
              the transition to sustainable energy across industries. We envision a future 
              where every air conditioning system operates at peak efficiency, where businesses 
              thrive financially while championing environmental responsibility.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* VerdeVida Philosophy */}
      <Section background="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              The <span className="text-primary">VerdeVida</span> Way
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              "Verde Vida" translates to "Green Life" in Spanish and Portuguese — a philosophy 
              that guides everything we do. We believe that sustainable living shouldn't come 
              at the expense of comfort or profitability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our approach combines cutting-edge technology with practical business sense, 
              ensuring that our solutions not only reduce carbon footprints but also deliver 
              tangible financial returns. This is the essence of VerdeVida — where green 
              practices meet smart business.
            </p>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-foreground italic text-lg">
                "We don't just sell products; we partner with businesses to build a legacy 
                of sustainable growth. Every HTS panel installed is a step towards a cleaner, 
                more efficient India."
              </p>
              <p className="text-primary font-medium mt-4">— VerdeVida Energies Team</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="font-outfit font-bold text-4xl text-foreground mb-2">Verde Vida</h3>
                  <p className="text-muted-foreground text-xl">Green Life</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-2 border-primary/20" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full border-2 border-accent/20" />
              <div className="absolute top-1/2 right-8 w-16 h-16 rounded-full bg-secondary/10" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gradient">
        <SectionHeader
          badge="Our Values"
          title="What Drives Us Forward"
          subtitle="The principles that shape our culture, guide our decisions, and define our commitment to sustainability."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-lift text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Company Timeline */}
      <Section background="muted">
        <SectionHeader
          badge="Our Journey"
          title="Milestones Along the Way"
          subtitle="From a vision to India's leading sustainable energy innovator."
        />

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-[27px] top-14 w-0.5 h-full bg-border" />
              )}
              
              {/* Year badge */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                {item.year.slice(2)}
              </div>
              
              {/* Content */}
              <div className="glass-card rounded-xl p-4 flex-grow">
                <div className="font-outfit font-bold text-primary mb-1">{item.year}</div>
                <p className="text-foreground">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sustainability Commitment */}
      <Section background="default">
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Commitment to Sustainability
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We are deeply committed to supporting India's Sustainable Development Goals, 
                particularly in Sustainable Cities and Climate Action. Every installation 
                contributes to reducing greenhouse gas emissions, supporting the national 
                power grid, and creating a more sustainable future for generations to come.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-primary mb-2">SDG 11</div>
                  <div className="text-sm text-muted-foreground">Sustainable Cities & Communities</div>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-accent mb-2">SDG 13</div>
                  <div className="text-sm text-muted-foreground">Climate Action</div>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-secondary mb-2">SDG 7</div>
                  <div className="text-sm text-muted-foreground">Affordable & Clean Energy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
