import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, TrendingDown } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/config/constants';

const Projects = () => {
  const extendedProjects = [
    ...PROJECTS,
    {
      id: 6,
      company: 'Tata Motors',
      location: 'Pune, Maharashtra',
      description: 'Manufacturing facility climate optimization',
      savingsPercent: 54,
      image: '/projects/tata-pune.jpg',
    },
    {
      id: 7,
      company: 'Infosys',
      location: 'Bangalore, Karnataka',
      description: 'IT campus cooling infrastructure',
      savingsPercent: 59,
      image: '/projects/infosys-bangalore.jpg',
    },
    {
      id: 8,
      company: 'Reliance Industries',
      location: 'Jamnagar, Gujarat',
      description: 'Industrial complex HVAC upgrade',
      savingsPercent: 56,
      image: '/projects/reliance-jamnagar.jpg',
    },
  ];

  const impactStats = [
    { value: '500+', label: 'Panels Installed' },
    { value: '₹2.5 Cr', label: 'Client Savings' },
    { value: '850 MT', label: 'CO₂ Offset' },
    { value: '25+', label: 'Cities Covered' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Proven Results <span className="gradient-text">Across Industries</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Discover how leading Indian companies have transformed their energy 
              consumption and achieved significant cost savings with our HTS technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <Section background="muted">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="default">
        <SectionHeader
          badge="Our Portfolio"
          title="Featured Installations"
          subtitle="Explore our successful HTS panel deployments across various industries and locations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extendedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* Project Image/Gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                
                {/* Company Logo Placeholder */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>

                {/* Savings Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-1"
                >
                  <TrendingDown className="w-4 h-4" />
                  {project.savingsPercent}% Savings
                </motion.div>

                {/* Company Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-outfit font-bold text-2xl text-background mb-1">
                    {project.company}
                  </h3>
                  <div className="flex items-center gap-1 text-background/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Energy Saved</div>
                    <div className="font-bold text-primary">{project.savingsPercent}%</div>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Case Study */}
      <Section background="gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Featured Case Study
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              L&T Surat: A Success Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Larsen & Toubro's Surat facility became one of our flagship installations, 
              demonstrating the full potential of HTS technology in an industrial setting.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Annual Savings', value: '₹45 Lakhs' },
                { label: 'Energy Reduction', value: '58%' },
                { label: 'CO₂ Offset', value: '120 MT/year' },
                { label: 'ROI Achieved', value: '2.5 Years' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-bold text-primary">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <blockquote className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
              <p className="text-foreground italic mb-4">
                "The HTS panels have exceeded our expectations. The reduction in our 
                electricity bills has been remarkable, and we're proud to be part of 
                the sustainability movement."
              </p>
              <cite className="text-muted-foreground not-italic">
                — Facilities Manager, L&T Surat
              </cite>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="font-outfit font-bold text-3xl text-background">L&T</h3>
                  <p className="text-background/80">Surat, Gujarat</p>
                </div>
              </div>
              
              {/* Stats Overlays */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-background/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">58%</div>
                <div className="text-xs text-muted-foreground">Energy Saved</div>
              </div>
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-background/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-accent">₹45L</div>
                <div className="text-xs text-muted-foreground">Annual Savings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Clients Logos Section */}
      <Section background="muted">
        <SectionHeader
          badge="Trusted By"
          title="Industry Leaders Choose VerdeVida"
          subtitle="Partnering with India's most respected organizations for sustainable energy solutions."
        />

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {['L&T', 'Adani', 'Siemens', 'ICICI', 'AIIMS', 'Tata', 'Infosys', 'Reliance'].map(
            (company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="w-32 h-20 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-soft transition-all duration-300"
              >
                <span className="font-outfit font-bold text-xl text-muted-foreground">
                  {company}
                </span>
              </motion.div>
            )
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Join These Industry Leaders
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Be part of the sustainable energy revolution. Get a customized 
              solution for your organization.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
