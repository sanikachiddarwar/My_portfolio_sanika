import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "9043a8e7-13b2-4a1f-b90e-5818b51bb617");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.error("Submission failed", data);
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      console.error("Submission error", error);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Let's Work Together
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Don't be shy!
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Mail Me</span>
                  <a href={PERSONAL_INFO.email} className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email.replace('mailto:', '')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Location</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.phone || "India"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Your Name" 
                    required
                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Your Email" 
                    required
                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  required
                  className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  required
                  className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-bold transition-all overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send size={18} className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-sm"
                >
                  <CheckCircle2 size={18} /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm"
                >
                  <AlertCircle size={18} /> Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
