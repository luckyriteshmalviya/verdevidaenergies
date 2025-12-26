import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'gradient' | 'dark';
}

const Section = ({ children, className, id, background = 'default' }: SectionProps) => {
  const bgClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-to-br from-primary/5 via-background to-accent/5',
    dark: 'bg-foreground text-background',
  };

  return (
    <section
      id={id}
      className={cn('section-padding', bgClasses[background], className)}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ badge, title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { Section, SectionHeader };
