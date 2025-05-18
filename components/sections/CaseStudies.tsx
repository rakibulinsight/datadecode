import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: number;
  client: string;
  logo: string;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'TechCorp',
    logo: '/logos/techcorp.svg',
    title: 'AI-Powered Customer Insights',
    description: 'Implemented predictive analytics to boost customer retention and personalization.',
    stats: [
      { label: 'Retention', value: '↑ 24%' },
      { label: 'Revenue', value: '↑ 2.1M' },
      { label: 'ROI', value: '312%' },
    ],
  },
  {
    id: 2,
    client: 'FinanceHub',
    logo: '/logos/financehub.svg',
    title: 'Real-time Risk Analysis',
    description: 'Developed automated risk assessment system for trading operations.',
    stats: [
      { label: 'Processing Time', value: '↓ 85%' },
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Cost Savings', value: '$5M' },
    ],
  },
  {
    id: 3,
    client: 'HealthTech',
    logo: '/logos/healthtech.svg',
    title: 'Patient Outcome Prediction',
    description: 'Built ML models to predict and improve patient treatment outcomes.',
    stats: [
      { label: 'Success Rate', value: '↑ 32%' },
      { label: 'Time Saved', value: '45hrs' },
      { label: 'Satisfaction', value: '98%' },
    ],
  },
];

const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-24 bg-dark-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-50 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-dark-50/70 max-w-2xl mx-auto">
            See how we've helped leading companies transform their data into success
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-glass-dark backdrop-blur-sm rounded-xl p-8 border border-dark-100/10 group hover:border-primary/30 transition-all duration-300"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid md:grid-cols-2 gap-12 items-center relative">
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <img
                        src={caseStudies[currentIndex].logo}
                        alt={caseStudies[currentIndex].client}
                        className="h-12 invert opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-dark-50 mb-4 group-hover:text-gradient transition-all duration-300">
                      {caseStudies[currentIndex].title}
                    </h3>
                    <p className="text-lg text-dark-50/70 mb-6 leading-relaxed">
                      {caseStudies[currentIndex].description}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {caseStudies[currentIndex].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 rounded-lg bg-dark-400/30 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-dark-50/60 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video bg-dark-300/80 rounded-lg overflow-hidden border border-dark-100/10 group-hover:border-primary/20 transition-all duration-300">
                  <div className="absolute inset-0">
                    <div className="code-block h-full overflow-hidden">
                      <div className="code-line">
                        <span className="code-number">1</span>
                        <span className="code-keyword">import</span>
                        <span className="text-white"> data </span>
                        <span className="code-keyword">from</span>
                        <span className="code-string"> './analysis'</span>
                      </div>
                      <div className="code-line">
                        <span className="code-number">2</span>
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> results </span>
                        <span className="text-white">= </span>
                        <span className="code-function">analyze</span>
                        <span className="text-white">(data)</span>
                      </div>
                      <div className="code-line terminal-prompt terminal-cursor">
                        <span className="code-number">3</span>
                        <span className="text-white">Processing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-glass-dark backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:scale-110 hover:border-primary/30 active:scale-95 transition-all duration-300 border border-dark-100/10 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-50 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12">
            <button
              onClick={next}
              className="p-3 rounded-full bg-glass-dark backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:scale-110 hover:border-primary/30 active:scale-95 transition-all duration-300 border border-dark-100/10 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-50 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-primary scale-125 shadow-lg shadow-primary/20'
                  : 'bg-glass-dark backdrop-blur-sm border border-dark-100/10 hover:border-primary/30 hover:bg-dark-300/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
