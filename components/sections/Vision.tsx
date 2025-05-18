import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  return (
    <section className="py-24 bg-dark-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-dark-400/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-dark-400/50 rounded-full border border-primary/20 font-mono text-sm text-primary">
              <span className="text-accent-green">class</span> DataDecodeFounder {'{'}
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">
                  Shaping the Future with
                </span>
                <br />
                <span className="text-dark-50">
                  AI & Data Science
                </span>
              </h2>

              <div className="flex items-center space-x-3 text-dark-50/80">
                <div className="w-12 h-12 rounded-full bg-dark-400/50 border border-primary/20 flex items-center justify-center">
                  <span className="text-xl font-mono text-primary">SI</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Sikder Md. Rakibul Islam</div>
                  <div className="font-mono text-sm text-dark-50/60">Founder & Chief Executive Officer</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-dark-50/80">
              <p className="text-lg font-medium border-l-2 border-primary/30 pl-4">
                "Our mission is to pioneer responsible AI innovation while democratizing data science. We envision a future where advanced AI capabilities empower every business to make intelligent, data-driven decisions that drive sustainable growth."
              </p>
              <div className="pl-4 space-y-4">
                <div className="font-mono">
                  <span className="text-primary">#</span> AI Vision
                  <p className="text-sm text-dark-50/60 mt-1">
                    Leading the development of ethical AI solutions that combine cutting-edge technology with human expertise, ensuring transparent and responsible implementation across industries.
                  </p>
                </div>
                <div className="font-mono">
                  <span className="text-primary">#</span> Innovation Philosophy
                  <p className="text-sm text-dark-50/60 mt-1">
                    Creating adaptive AI systems that evolve with businesses, focusing on explainable AI, continuous learning, and seamless integration with existing workflows.
                  </p>
                </div>
                <div className="font-mono">
                  <span className="text-primary">#</span> Leadership Approach
                  <p className="text-sm text-dark-50/60 mt-1">
                    Fostering an environment of AI excellence through research, collaboration, and a commitment to pushing the boundaries of what's possible with machine learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Company Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg border border-primary/20 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-2 text-sm text-dark-50/60">
                  <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                  <span className="font-mono">ai.vision.config.js</span>
                </div>

                <div className="space-y-4 font-mono">
                  <div className="text-dark-50/70">
                    <span className="text-primary">const</span>{' '}
                    <span className="text-accent-blue">aiStrategy</span>{' '}
                    <span className="text-dark-50">= {'{'}</span>
                  </div>

                  <div className="pl-4">
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">coreFocus:</span>{' '}
                      <span className="text-code-purple">"Developing enterprise-grade AI solutions that scale with business needs"</span>,
                    </div>
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">technologies:</span> [<br />
                      <div className="pl-4">
                        <span className="text-code-purple">"Deep Learning"</span>,<br />
                        <span className="text-code-purple">"Natural Language Processing"</span>,<br />
                        <span className="text-code-purple">"Computer Vision"</span>,<br />
                        <span className="text-code-purple">"Predictive Analytics"</span>
                      </div>
                      ],
                    </div>
                    <div className="text-dark-50/70">
                      <span className="text-accent-green">principles:</span> [<br />
                      <div className="pl-4">
                        <span className="text-code-purple">"Ethical AI Development"</span>,<br />
                        <span className="text-code-purple">"Explainable Solutions"</span>,<br />
                        <span className="text-code-purple">"Privacy by Design"</span>,<br />
                        <span className="text-code-purple">"Continuous Innovation"</span>
                      </div>
                      ]
                    </div>
                  </div>

                  <div className="text-dark-50/70">{'}'}</div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-50/60">AI Project Success Rate</span>
                    <span className="text-primary">96%</span>
                  </div>
                  <div className="w-full h-1 bg-dark-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '96%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent-blue"
                    ></motion.div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-50/60">AI Model Accuracy</span>
                    <span className="text-primary">94%</span>
                  </div>
                  <div className="w-full h-1 bg-dark-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '94%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent-blue"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;