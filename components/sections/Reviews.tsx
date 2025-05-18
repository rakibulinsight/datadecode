import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  tags: string[];
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVision Inc.",
    content: "DataDecode transformed our data infrastructure completely. Their AI solutions helped us reduce decision-making time by 75% while improving accuracy.",
    rating: 5,
    tags: ["AI Implementation", "Data Infrastructure", "Process Optimization"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Analytics",
    company: "FinanceHub",
    content: "The team's expertise in financial data analysis is unmatched. They helped us implement predictive models that increased our trading accuracy by 45%.",
    rating: 5,
    tags: ["Predictive Analytics", "Financial Modeling", "Risk Assessment"]
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "HealthTech Solutions",
    content: "Their machine learning models have revolutionized our patient care prediction system. A game-changer in healthcare analytics.",
    rating: 5,
    tags: ["Healthcare Analytics", "Machine Learning", "Predictive Modeling"]
  }
];

const Reviews: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-dark-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-dark-300/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-dark-300/50 rounded-full border border-primary/20 font-mono text-sm text-primary mb-6">
            <span className="text-accent-green">import</span> {'{'} clientSuccess {'}'} from <span className="text-code-purple">"./reviews"</span>
          </div>

          <h2 className="text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">
              Client Success Stories
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-dark-300/80 border border-primary/20 text-dark-50/70 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20">
            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-dark-300/80 border border-primary/20 text-dark-50/70 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-primary/20 p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-accent-green">{'>'}</span>
                        <h3 className="text-xl font-bold text-dark-50">{reviews[activeReview].name}</h3>
                      </div>
                      <div className="font-mono text-sm text-dark-50/60">
                        {reviews[activeReview].role} @ {reviews[activeReview].company}
                      </div>
                    </div>

                    <blockquote className="text-dark-50/80 text-lg">
                      "{reviews[activeReview].content}"
                    </blockquote>

                    <div className="flex flex-wrap gap-2">
                      {reviews[activeReview].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark-400/50 rounded-full text-xs font-mono text-primary/80"
                        >
                          #{tag.toLowerCase().replace(/\s+/g, '_')}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-dark-400/80 rounded-lg p-6 font-mono text-sm">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-dark-50/60">
                          <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                          <span>metrics.json</span>
                        </div>

                        <div className="space-y-2">
                          <div className="text-dark-50/70">
                            {'{'}<br />
                            <div className="pl-4">
                              <span className="text-accent-green">"satisfaction":</span>{' '}
                              <span className="text-primary">100</span>,<br />
                              <span className="text-accent-green">"timeToValue":</span>{' '}
                              <span className="text-primary">"-45%"</span>,<br />
                              <span className="text-accent-green">"roi":</span>{' '}
                              <span className="text-primary">"+280%"</span>
                            </div>
                            {'}'}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-dark-100/10">
                          <div className="flex items-center space-x-1">
                            {[...Array(reviews[activeReview].rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeReview ? 'bg-primary' : 'bg-dark-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;