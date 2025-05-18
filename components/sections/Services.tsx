import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ConsultationModal from '../ConsultationModal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
  benefits: { label: string; value: string }[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features, technologies, benefits, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-glass-dark backdrop-blur-sm rounded-lg hover:shadow-2xl transition-all duration-500 border border-dark-100/10 group hover:border-primary/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Service Header */}
      <div className="p-6 border-b border-dark-100/10">
        <div className="flex items-start space-x-4">
          <div className="text-primary w-12 h-12 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-dark-50 group-hover:text-gradient transition-all duration-300">{title}</h3>
            <p className="text-dark-50/70 mt-2">{description}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="p-6 space-y-6">
        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-primary mb-3 font-mono"># Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                className="flex items-center text-sm text-dark-50/70"
              >
                <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-sm font-semibold text-primary mb-3 font-mono"># Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                className="px-3 py-1 text-xs rounded-full bg-dark-400/50 text-dark-50/70 border border-primary/20 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Benefits/Stats */}
        <div>
          <h4 className="text-sm font-semibold text-primary mb-3 font-mono"># Benefits</h4>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                className="bg-dark-400/30 rounded-lg p-3 border border-primary/10"
              >
                <div className="text-xs text-dark-50/60">{benefit.label}</div>
                <div className="text-lg font-bold text-gradient">{benefit.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-dark-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-50 mb-4">
            Data Science Services
          </h2>
          <p className="text-xl text-dark-50/70 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of data science solutions, powered by cutting-edge AI and machine learning technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceCard
            title="Advanced Analytics & BI"
            description="Transform raw data into actionable insights with our advanced analytics and business intelligence solutions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            features={[
              "Real-time data analytics dashboards",
              "Predictive analytics models",
              "Custom KPI tracking",
              "Automated reporting systems",
              "Data quality assessment"
            ]}
            technologies={[
              "Tableau", "Power BI", "Python", "R", "SQL", "Apache Spark"
            ]}
            benefits={[
              { label: "Efficiency Increase", value: "↑ 45%" },
              { label: "Cost Reduction", value: "↓ 30%" },
              { label: "Decision Time", value: "↓ 65%" },
              { label: "Data Accuracy", value: "99.9%" }
            ]}
            delay={0.2}
          />

          <ServiceCard
            title="Machine Learning Solutions"
            description="Leverage the power of machine learning to automate processes and uncover hidden patterns in your data."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            features={[
              "Custom ML model development",
              "Automated model training",
              "Pattern recognition",
              "Anomaly detection",
              "Natural Language Processing"
            ]}
            technologies={[
              "TensorFlow", "PyTorch", "Scikit-learn", "BERT", "OpenAI", "Keras"
            ]}
            benefits={[
              { label: "Prediction Accuracy", value: "96%" },
              { label: "Process Automation", value: "↑ 75%" },
              { label: "Time Saved", value: "85%" },
              { label: "ROI", value: "3.5x" }
            ]}
            delay={0.4}
          />

          <ServiceCard
            title="AI Consulting & Strategy"
            description="Strategic AI consulting to help you identify opportunities and implement the right solutions for your business."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            features={[
              "AI readiness assessment",
              "Technology roadmap development",
              "ROI analysis",
              "Implementation strategy",
              "Team training & support"
            ]}
            technologies={[
              "Azure AI", "AWS AI", "Google Cloud AI", "IBM Watson", "Custom Solutions"
            ]}
            benefits={[
              { label: "Success Rate", value: "92%" },
              { label: "Time to Market", value: "↓ 40%" },
              { label: "Team Efficiency", value: "↑ 60%" },
              { label: "Cost Savings", value: "$2.5M" }
            ]}
            delay={0.6}
          />

          <ServiceCard
            title="Data Engineering & Infrastructure"
            description="Build robust data infrastructure and pipelines to support your analytics and AI initiatives."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            features={[
              "Data pipeline development",
              "Cloud infrastructure setup",
              "Data warehouse design",
              "ETL process optimization",
              "Real-time data processing"
            ]}
            technologies={[
              "Apache Kafka", "Airflow", "Snowflake", "MongoDB", "AWS", "Azure"
            ]}
            benefits={[
              { label: "Data Processing", value: "↑ 80%" },
              { label: "Infrastructure Cost", value: "↓ 35%" },
              { label: "System Uptime", value: "99.99%" },
              { label: "Data Latency", value: "↓ 70%" }
            ]}
            delay={0.8}
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Schedule a Free Consultation
          </motion.button>
          <p className="text-dark-50/60 mt-4">
            Get a personalized assessment of how our services can benefit your business
          </p>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Services;