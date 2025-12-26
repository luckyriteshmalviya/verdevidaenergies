import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { submitContactForm, updateFormData, resetForm } from '@/store/slices/contactSlice';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/config/constants';

const Contact = () => {
  const dispatch = useAppDispatch();
  const { formData, isSubmitting, isSuccess, isError } = useAppSelector((state) => state.contact);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) dispatch(submitContactForm(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-12 glass-card rounded-3xl max-w-md">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="font-outfit font-bold text-3xl text-foreground mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6">We've received your inquiry and will get back to you within 24 hours.</p>
          <Button onClick={() => dispatch(resetForm())}>Send Another Message</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Contact Us</span>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">Ready to transform your energy consumption? Let's talk.</p>
          </motion.div>
        </div>
      </section>
      <Section background="muted">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-bold text-2xl text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'phone', 'company'].map((field) => (
                <div key={field}>
                  <input name={field} type={field === 'email' ? 'email' : 'text'} placeholder={field.charAt(0).toUpperCase() + field.slice(1) + (field === 'company' ? ' (Optional)' : ' *')} value={(formData as any)[field]} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors[field] && <p className="text-destructive text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div>
                <textarea name="message" rows={4} placeholder="Your Message *" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none" />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              {isError && <p className="text-destructive">Something went wrong. Please try again.</p>}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-outfit font-bold text-2xl text-foreground mb-6">Contact Information</h2>
            {[{ icon: Mail, label: 'Email', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` }, { icon: Phone, label: 'Phone', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` }].map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 p-4 glass-card rounded-xl hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><item.icon className="w-6 h-6 text-primary" /></div>
                <div><div className="text-sm text-muted-foreground">{item.label}</div><div className="font-semibold text-foreground">{item.value}</div></div>
              </a>
            ))}
            <div className="flex items-start gap-4 p-4 glass-card rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
              <div><div className="text-sm text-muted-foreground">Address</div><div className="font-semibold text-foreground">{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</div></div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
