import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      category: 'services',
      question: 'What data science services do you offer?',
      answer: 'We provide comprehensive data science solutions including predictive analytics, machine learning model development, data visualization, business intelligence, and process automation. Our team specializes in turning complex data into actionable insights.'
    },
    {
      category: 'services',
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and strict access controls. All our processes comply with industry standards and data protection regulations.'
    },
    {
      category: 'process',
      question: 'What is your project development process?',
      answer: 'Our process involves: 1) Initial consultation and requirement gathering, 2) Data assessment and strategy development, 3) Solution design and implementation, 4) Testing and validation, and 5) Deployment and ongoing support.'
    },
    {
      category: 'pricing',
      question: 'How do you structure your pricing?',
      answer: 'We offer flexible pricing models based on project scope, complexity, and duration. This includes fixed-price projects, time-and-materials arrangements, and retainer options. We provide detailed proposals after understanding your specific needs.'
    },
    {
      category: 'process',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple analytics projects might take 2-4 weeks, while complex machine learning implementations could span 3-6 months. We provide detailed timelines during initial consultations.'
    },
    {
      category: 'support',
      question: 'What kind of support do you provide after project completion?',
      answer: 'We offer comprehensive post-deployment support including system monitoring, performance optimization, model retraining, and technical assistance. Our support packages can be customized to your needs.'
    }
  ];

  const categories = ['all', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 bg-dark-400 relative overflow-hidden">
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
            <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-dark-50/90 max-w-2xl mx-auto">
            Find answers to common questions about our data science services and process
          </p>
        </motion.div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-dark-300/80 border border-primary/20 rounded-lg px-4 py-3 pl-12 text-dark-50 placeholder-dark-50/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-dark-50/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-300/80 text-dark-50/70 hover:bg-dark-300 hover:text-dark-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-300/80 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-300/50 transition-colors"
              >
                <span className="font-medium text-dark-50">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-dark-50/90">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-dark-50/70"
          >
            <p>No matching questions found. Try adjusting your search.</p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-50/90 mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;