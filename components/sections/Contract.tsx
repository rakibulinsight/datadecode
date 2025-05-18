import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const Contract: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Move to review step
      setStep(2);
    } else if (step === 2) {
      // Move to connect step
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-50/90 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-dark-400/80 border border-primary/20 rounded-lg px-4 py-3 text-dark-50 placeholder-dark-50/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/40"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-50/90 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-dark-400/80 border border-primary/20 rounded-lg px-4 py-3 text-dark-50 placeholder-dark-50/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/40"
                  placeholder="Enter your work email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-50/90 mb-2">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-dark-400/80 border border-primary/20 rounded-lg px-4 py-3 text-dark-50 placeholder-dark-50/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/40"
                  placeholder="Where do you work?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-50/90 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-dark-400/80 border border-primary/20 rounded-lg px-4 py-3 text-dark-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/40"
                  required
                >
                  <option value="">Choose your project type</option>
                  <option value="data-analysis">Data Analysis & Insights</option>
                  <option value="machine-learning">AI & Machine Learning</option>
                  <option value="automation">Process Automation</option>
                  <option value="visualization">Data Visualization</option>
                  <option value="other">Other / Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-50/90 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-dark-400/80 border border-primary/20 rounded-lg px-4 py-3 text-dark-50 placeholder-dark-50/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/40"
                  placeholder="Describe your project goals and challenges..."
                  required
                ></textarea>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="bg-dark-400/50 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-dark-50 mb-4">Review Your Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="text-dark-50/70">Name:</span>
                  <span className="text-dark-50 font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="text-dark-50/70">Email:</span>
                  <span className="text-dark-50 font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="text-dark-50/70">Company:</span>
                  <span className="text-dark-50 font-medium">{formData.company}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="text-dark-50/70">Project Type:</span>
                  <span className="text-dark-50 font-medium">{formData.projectType}</span>
                </div>
                <div className="py-2">
                  <span className="text-dark-50/70 block mb-2">Project Details:</span>
                  <p className="text-dark-50 bg-dark-300/50 p-4 rounded-lg">{formData.message}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 mx-auto mb-6 text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-dark-50 mb-4">Thank You!</h3>
            <p className="text-xl text-dark-50/70 mb-6">We'll be in touch with you shortly.</p>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-dark-50/60">Expected response time: <span className="text-primary">24 hours</span></p>
              <div className="flex items-center space-x-2 text-dark-50/60">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Our team is reviewing your request</span>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-dark-300/50 to-dark-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">Get in Touch</span>
          </h2>
          <p className="text-xl text-dark-50/90 max-w-2xl mx-auto">
            Ready to transform your data challenges into opportunities? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-300/80 backdrop-blur-sm rounded-xl p-8 border border-primary/20 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Progress Steps */}
            <div className="flex items-center space-x-4 text-sm text-dark-50/60 mb-8">
              <div className={`flex items-center ${step >= 1 ? 'text-primary' : ''}`}>
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 bg-dark-300/50 ${step >= 1 ? 'border-primary' : 'border-primary/30'}`}>
                  1
                </span>
                Details
              </div>
              <div className="flex-1 border-t border-dark-100/10"></div>
              <div className={`flex items-center ${step >= 2 ? 'text-primary' : ''}`}>
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 bg-dark-300/50 ${step >= 2 ? 'border-primary' : 'border-primary/30'}`}>
                  2
                </span>
                Review
              </div>
              <div className="flex-1 border-t border-dark-100/10"></div>
              <div className={`flex items-center ${step >= 3 ? 'text-primary' : ''}`}>
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 bg-dark-300/50 ${step >= 3 ? 'border-primary' : 'border-primary/30'}`}>
                  3
                </span>
                Connect
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>

              <div className="mt-8 flex justify-between items-center">
                {step > 1 && step < 3 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2 text-dark-50/70 hover:text-primary transition-colors"
                  >
                    Back
                  </motion.button>
                )}
                {step < 3 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-auto py-3 px-6 bg-gradient-to-r from-primary via-accent-blue to-accent-neon text-white font-medium rounded-lg shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 relative overflow-hidden group ${
                      isSubmitting ? 'opacity-80 cursor-wait' : ''
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <span>{step === 1 ? 'Continue to Review' : 'Submit'}</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-primary to-accent-neon opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-opacity duration-200"></div>
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Column - Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-300/90 rounded-xl border border-primary/20 overflow-hidden shadow-xl relative group sticky top-24"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-dark-400/90 px-4 py-2 flex items-center space-x-2 border-b border-primary/10">
              <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
              <span className="text-dark-50/70 text-sm ml-2 font-mono">message_status.log</span>
            </div>
            <div className="p-6 font-mono text-sm relative z-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">$</span> awaiting_input...
                    </div>
                    <div className="text-primary">
                      {'>'} Ready to capture details
                    </div>
                    <div className="text-accent-blue">
                      {'>'} Form validation active
                    </div>
                    <div className="text-dark-50/70 animate-pulse">
                      <span className="text-accent-green">$</span> listening_for_submission<span className="animate-code-blink">_</span>
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">$</span> processing_details...
                    </div>
                    <div className="text-primary">
                      {'>'} Validating information
                    </div>
                    <div className="text-accent-blue">
                      {'>'} Preparing secure channel
                    </div>
                    <div className="text-dark-50/70 animate-pulse">
                      <span className="text-accent-green">$</span> ready_for_submission<span className="animate-code-blink">_</span>
                    </div>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">$</span> submission_complete
                    </div>
                    <div className="text-primary">
                      {'>'} Message delivered successfully
                    </div>
                    <div className="text-accent-blue">
                      {'>'} Notification sent to team
                    </div>
                    <div className="text-code-purple">
                      {'>'} Response ETA: 24h
                    </div>
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">$</span> connection_established<span className="animate-code-blink">_</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: '🔒',
              title: 'Secure Communication',
              description: 'Your information is protected with enterprise-grade security',
            },
            {
              icon: '⚡',
              title: '24-Hour Response',
              description: 'Get a response from our team within one business day',
            },
            {
              icon: '🎯',
              title: 'Expert Consultation',
              description: 'Connect with data science specialists matched to your needs',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-300/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-dark-50 mb-2">{feature.title}</h3>
                <p className="text-dark-50/90">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contract;