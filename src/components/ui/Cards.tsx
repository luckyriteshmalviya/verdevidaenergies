import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  delay?: number;
}

const StatCard = ({ value, label, description, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 md:p-8 hover-lift text-center"
    >
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      )}
      <div className="font-outfit font-bold text-4xl md:text-5xl text-primary mb-2">
        {value}
      </div>
      <div className="font-semibold text-foreground mb-1">{label}</div>
      {description && (
        <div className="text-sm text-muted-foreground">{description}</div>
      )}
    </motion.div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0, className }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'group glass-card rounded-2xl p-6 md:p-8 hover-lift glow-effect',
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="font-outfit font-bold text-xl text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

interface ProjectCardProps {
  company: string;
  location: string;
  description: string;
  savingsPercent: number;
  image?: string;
  delay?: number;
}

const ProjectCard = ({ company, location, description, savingsPercent, image, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass-card rounded-2xl overflow-hidden hover-lift"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-2">
            {savingsPercent}% Savings
          </div>
          <h3 className="font-outfit font-bold text-2xl text-background">{company}</h3>
          <p className="text-background/80 text-sm">{location}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, role, company, image, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-8 hover-lift"
    >
      <div className="text-5xl text-primary/20 font-serif mb-4">"</div>
      <p className="text-foreground text-lg leading-relaxed mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export { StatCard, FeatureCard, ProjectCard, TestimonialCard };
