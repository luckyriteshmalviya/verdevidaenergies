import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/config/constants';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Valid email required';
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = 'Valid phone required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (!res.ok) throw new Error('Failed');

      setIsSuccess(true);
      setFormData(initialForm);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ SUCCESS UI
  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-12 glass-card rounded-3xl max-w-md"
        >
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="font-outfit font-bold text-3xl mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground mb-6">
            We’ve received your inquiry and will contact you shortly.
          </p>
          <Button onClick={() => setIsSuccess(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6">
            Contact Us
          </span>
          <h1 className="font-outfit font-bold text-4xl md:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to transform your energy consumption? Let’s talk.
          </p>
        </div>
      </section>

      {/* FORM */}
      <Section background="muted">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-outfit font-bold text-2xl mb-6">
              Send Us a Message
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* REQUIRED FOR NETLIFY */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {['name', 'email', 'phone', 'company'].map((field) => (
                <div key={field}>
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={
                      field.charAt(0).toUpperCase() +
                      field.slice(1) +
                      (field === 'company' ? ' (Optional)' : ' *')
                    }
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  {errors[field] && (
                    <p className="text-destructive text-sm">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-sm">
                    {errors.message}
                  </p>
                )}
              </div>

              {isError && (
                <p className="text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full p-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <h2 className="font-outfit font-bold text-2xl mb-6">
              Contact Information
            </h2>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex gap-4 p-4 glass-card rounded-xl"
            >
              <Mail />
              {COMPANY_INFO.email}
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex gap-4 p-4 glass-card rounded-xl"
            >
              <Phone />
              {COMPANY_INFO.phone}
            </a>

            <div className="flex gap-4 p-4 glass-card rounded-xl">
              <MapPin />
              {COMPANY_INFO.address.line1},{' '}
              {COMPANY_INFO.address.city},{' '}
              {COMPANY_INFO.address.state}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
