import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Leaf, Clock, Shield, Zap, BarChart, Sun, Wind, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/Section';
import { StatCard, FeatureCard, ProjectCard, TestimonialCard } from '@/components/ui/Cards';
import { STATS, BENEFITS, PROJECTS, PRODUCT_INFO } from '@/config/constants';
import heroBg from '@/assets/hero.jpeg';

const iconMap: Record<string, any> = {
  TrendingDown,
  Leaf,
  Clock,
  Shield,
  Zap,
  BarChart,
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hybrid Thermal Solar Panels on modern building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6"
              >
                <Sun className="w-4 h-4" />
                Pioneering Sustainable Energy
              </motion.span>

              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background leading-tight mb-6">
                Reduce AC Costs by{' '}
                <span className="text-accent">{PRODUCT_INFO.costReduction}</span>{' '}
                with HTS Panels
              </h1>

              <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Revolutionary Hybrid Thermal Solar technology that slashes your 
                air conditioning bills while contributing to a greener planet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="heroOutline" size="xl">
                    Calculate Savings
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-background">{PRODUCT_INFO.roiYears} Yrs</div>
                  <div className="text-sm text-background/60">ROI Period</div>
                </div>
                <div className="w-px h-12 bg-background/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-background">{PRODUCT_INFO.warrantyYears} Yrs</div>
                  <div className="text-sm text-background/60">Warranty</div>
                </div>
                <div className="w-px h-12 bg-background/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-background">{PRODUCT_INFO.lifespanYears}+ Yrs</div>
                  <div className="text-sm text-background/60">Lifespan</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative h-[500px]">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 right-0 glass-card rounded-2xl p-6 max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-4xl font-bold text-primary">25%-40%</div>
                  <div className="text-sm text-muted-foreground">Lower AC electricity bills</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-32 left-0 glass-card rounded-2xl p-6 max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Eco Impact</div>
                  </div>
                  <div className="text-4xl font-bold text-accent">150 MMT</div>
                  <div className="text-sm text-muted-foreground">CO₂ reduction potential</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-20 right-10 glass-card rounded-2xl p-6 max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Zap className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Inverter Compatible</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Works with all modern inverter ACs for optimal efficiency</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-background/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <Section background="default">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="muted">
        <SectionHeader
          badge="Why Choose HTS?"
          title="Benefits That Make a Difference"
          subtitle="Discover how our Hybrid Thermal Solar technology transforms your energy consumption and contributes to sustainability."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <FeatureCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={iconMap[benefit.icon] || Leaf}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      {/* <Section background="gradient">
        <SectionHeader
          badge="Technology"
          title="How HTS Panels Work"
          subtitle="Our innovative Hybrid Thermal Solar panels combine thermal regulation with solar energy for unprecedented efficiency."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Solar Absorption',
              description: 'HTS panels absorb solar thermal energy during peak sunlight hours, reducing heat load on your AC system.',
              icon: Sun,
            },
            {
              step: '02',
              title: 'Heat Transfer',
              description: 'Advanced thermal technology channels excess heat away from the AC outdoor unit, improving compressor efficiency.',
              icon: Wind,
            },
            {
              step: '03',
              title: 'Energy Savings',
              description: 'Your inverter AC works at optimal efficiency, consuming up to 25%-40% less electricity while maintaining comfort.',
              icon: Droplets,
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-8xl font-outfit font-bold text-primary/10 absolute -top-4 -left-2">
                {item.step}
              </div>
              <div className="relative glass-card rounded-2xl p-8 pt-12 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Projects Preview */}
      {/* <Section background="muted">
        <SectionHeader
          badge="Our Work"
          title="Proven Results Across Industries"
          subtitle="See how leading companies have transformed their energy consumption with our HTS solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section> */}

      {/* Sustainability Impact */}
      <Section background="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Sustainability
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Contributing to a <span className="text-primary">Greener Future</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Air conditioners contribute approximately 150 Million Metric Tonnes of CO₂ emissions 
              annually in India alone. By adopting HTS technology, you become part of the solution 
              to combat climate change.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Supports National Sustainable Development Goals',
                'Reduces peak summer power demand on the grid',
                'Helps DISCOMs manage electricity distribution',
                'Aligns with Climate Action initiatives',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="default" size="lg">
                Learn About Our Mission
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--accent)/0.3),transparent_50%)]" />
              
              <div className="relative h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 mb-8"
                >
                  <div className="w-full h-full rounded-full border-4 border-dashed border-primary/30" />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-6xl font-outfit font-bold text-primary mt-16">150</div>
                <div className="text-lg font-medium text-foreground">Million Metric Tonnes</div>
                <div className="text-muted-foreground">CO₂ reduction potential annually</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJoLTRjLTIgMC00IDItNCAyczIgNCAyIDR2NGMwIDIgMiA0IDIgNHMyIDIgNCAyaDRjMiAwIDQtMiA0LTJzLTItNC0yLTR2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Transform Your Energy Consumption?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join leading companies in India who have already made the switch to 
              sustainable, cost-effective cooling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="xl">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="heroOutline" size="xl">
                  Explore Our Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
