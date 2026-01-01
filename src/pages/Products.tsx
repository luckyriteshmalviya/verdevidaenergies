import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  Sun,
  Thermometer,
  Zap,
  Clock,
  Shield,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { PRODUCT_INFO } from "@/config/constants";

const Products = () => {
  const features = [
    {
      feature: "Electricity Cost Reduction",
      hts: "Up to 25%-40%",
      conventional: "20-30%",
    },
    { feature: "Works with Inverter ACs", hts: true, conventional: false },
    {
      feature: "Daytime Performance",
      hts: "Optimized",
      conventional: "Standard",
    },
    {
      feature: "Heat Management",
      hts: "Active thermal regulation",
      conventional: "Passive only",
    },
    { feature: "ROI Period", hts: "3 Years", conventional: "7-10 Years" },
    { feature: "Warranty", hts: "5 Years", conventional: "2-3 Years" },
    { feature: "Lifespan", hts: "15+ Years", conventional: "10-12 Years" },
    {
      feature: "Grid Independence",
      hts: "Partial",
      conventional: "Full dependency",
    },
    {
      feature: "Peak Load Reduction",
      hts: "Significant",
      conventional: "Minimal",
    },
  ];

  const technicalSpecs = [
    { label: "Panel Type", value: "Hybrid Thermal Solar (HTS)" },
    { label: "Compatibility", value: "All Inverter AC Units" },
    { label: "Installation Location", value: "Near outdoor AC unit (terrace)" },
    { label: "Optimal Usage", value: "Daytime AC operation" },
    { label: "Energy Savings", value: "Up to 25%-40%" },
    { label: "Manufacturing Warranty", value: "5 Years" },
    { label: "Expected Lifespan", value: "15+ Years" },
    { label: "ROI Period", value: "3 Years average" },
  ];

  const requirements = [
    {
      title: "Inverter AC Required",
      description:
        "HTS panels work exclusively with inverter air conditioning units.",
      icon: Zap,
    },
    {
      title: "Outdoor Unit Access",
      description:
        "The AC outdoor unit should be accessible near the terrace or rooftop.",
      icon: Sun,
    },
    {
      title: "Daytime Usage",
      description: "Maximum benefits are achieved during daytime AC operation.",
      icon: Clock,
    },
    {
      title: "Professional Installation",
      description:
        "Our certified technicians ensure optimal panel placement and connection.",
      icon: Shield,
    },
  ];

  const benefits = [
    {
      percentage: "25-40",
      label: "Cost Savings",
      description: "Reduction in AC electricity consumption",
    },
    {
      percentage: 100,
      label: "Eco-Friendly",
      description: "Zero emissions during operation",
    },
    {
      percentage: 15,
      label: "Lifespan Years",
      description: "Durable, long-lasting performance",
    },
  ];

  const benefitsForPVS = [
    {
      percentage: "20-30",
      label: "Cost Savings",
    },
   
    {
      percentage: '10-12',
      label: "Lifespan Years",
      description: "Durable, long-lasting performance",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 grid gap-12">
          <span className="w-48 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Products
          </span>

          {/* HTS Panel*/}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                {PRODUCT_INFO.fullName}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Revolutionary technology that combines thermal energy management
                with solar efficiency to dramatically reduce your air
                conditioning costs while contributing to a sustainable future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted/50"
                  >
                    <div className="text-3xl font-bold text-primary">
                      {benefit.percentage}
                      {benefit.label === "Lifespan Years" ? "+" : "%"}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {benefit.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-8 relative overflow-hidden">
                <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="w-20 h-20 text-primary mx-auto mb-4" />
                    <Thermometer className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="font-outfit font-bold text-2xl text-foreground">
                      HTS Technology
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Solar + Thermal Hybrid
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  25%-40% Savings
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  5 Year Warranty
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* photo voltic solar system */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Photo Voltic Solar System
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                A Photovoltaic (PV) Solar System is a system that converts
                sunlight directly into electricity using solar panels made of
                photovoltaic cells.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                {/* <Link to="/projects">
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </Link> */}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                {benefitsForPVS.map((benefit, index) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted/50"
                  >
                    <div className="text-3xl font-bold text-primary">
                      {benefit.percentage}
                      {benefit.label === "Lifespan Years" ? "+" : "%"}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {benefit.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-8 relative overflow-hidden">
                <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="w-20 h-20 text-primary mx-auto mb-4" />
                    <Thermometer className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="font-outfit font-bold text-2xl text-foreground">
                      PVS Technology
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Solar Energy
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  20%-30% Savings
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  2-3 Year Warranty
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <Section background="muted">
        <SectionHeader
          badge="Technology"
          title="How HTS Panels Work"
          subtitle="Understanding the science behind our revolutionary hybrid thermal solar technology."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              icon: Sun,
              title: 'Solar Absorption',
              description: 'HTS panels capture solar thermal energy during peak sunlight hours, leveraging natural heat to power the cooling process.',
            },
            {
              step: 2,
              icon: Thermometer,
              title: 'Thermal Regulation',
              description: 'Advanced heat exchangers redirect thermal energy away from your AC outdoor unit, significantly reducing compressor workload.',
            },
            {
              step: 3,
              icon: Zap,
              title: 'Energy Optimization',
              description: 'Your inverter AC operates at peak efficiency, consuming up to 25%-40% less electricity while maintaining optimal cooling performance.',
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
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                {item.step}
              </div>
              <div className="glass-card rounded-2xl p-8 pt-12 hover-lift h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
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

      {/* Comparison Table */}
      <Section background="default">
        <SectionHeader
          badge="Comparison"
          title="HTS vs Conventional Solar"
          subtitle="See why HTS technology outperforms traditional solar panels for AC efficiency."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full glass-card rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-outfit font-semibold text-foreground">
                  Feature
                </th>
                <th className="text-center p-4 font-outfit font-semibold text-primary">
                  HTS Panels
                </th>
                <th className="text-center p-4 font-outfit font-semibold text-muted-foreground">
                  Conventional Solar
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-muted/30" : ""}
                >
                  <td className="p-4 text-foreground font-medium">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.hts === "boolean" ? (
                      row.hts ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )
                    ) : (
                      <span className="text-primary font-semibold">
                        {row.hts}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.conventional === "boolean" ? (
                      row.conventional ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">
                        {row.conventional}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* Technical Requirements */}
      <Section background="gradient">
        <SectionHeader
          badge="Requirements"
          title="What You Need"
          subtitle="Essential requirements for HTS panel installation and optimal performance."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 flex gap-4 hover-lift"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <req.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-lg text-foreground mb-2">
                  {req.title}
                </h3>
                <p className="text-muted-foreground">{req.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex gap-4 items-start"
        >
          <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">
              Important Note
            </h4>
            <p className="text-muted-foreground">
              HTS panels are specifically designed for use with inverter ACs.
              The outdoor unit must be located near the terrace or rooftop for
              optimal installation. Our team will assess your site to ensure
              compatibility before installation.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Technical Specifications */}
      <Section background="muted">
        <SectionHeader
          badge="Specifications"
          title="Technical Details"
          subtitle="Complete specifications for HTS panel systems."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {technicalSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex justify-between items-center p-4 ${
                  index % 2 === 0 ? "bg-muted/30" : ""
                }`}
              >
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-semibold text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </motion.div>
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
              Ready to Cut Your AC Costs by 25%-40%?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get a personalized quote and see how much you can save with HTS
              panels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="xl">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="heroOutline" size="xl">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
