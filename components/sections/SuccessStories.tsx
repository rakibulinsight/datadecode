import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SuccessMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

interface SuccessStory {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: SuccessMetric[];
  image: string;
}

const SuccessStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActiveStory((prev) => (prev + 1) % stories.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleStoryClick = (index: number) => {
    setActiveStory(index);
    setIsPaused(true);
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const getBackupImage = (index: number) => {
    const backupImages = [
      'https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg',  // E-commerce
      'https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg',    // Healthcare
      'https://cdn.pixabay.com/photo/2017/12/04/07/34/business-2997305_1280.jpg'  // Finance
    ];
    return backupImages[index] || backupImages[0];
  };

  const stories: SuccessStory[] = [
    {
      company: "Pilot Project: E-commerce Analytics",
      industry: "Retail Technology",
      challenge: "Local retailer struggling to understand customer behavior and inventory management",
      solution: "Implemented basic predictive analytics for inventory and customer segmentation",
      impact: "Successful 3-month pilot showing promising results in inventory optimization",
      metrics: [
        { label: "Inventory Accuracy", value: "94", suffix: "%" },
        { label: "Cost Savings", value: "15", prefix: "+", suffix: "%" },
        { label: "Time Saved", value: "10", suffix: " hrs/week" }
      ],
      image: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
    },
    {
      company: "Research Project: Healthcare",
      industry: "Medical Data Analysis",
      challenge: "Academic collaboration on patient data pattern recognition",
      solution: "Developed prototype ML model for early diagnosis patterns",
      impact: "Research paper accepted at healthcare analytics conference",
      metrics: [
        { label: "Pattern Accuracy", value: "91", suffix: "%" },
        { label: "Data Points", value: "5000", suffix: "+" },
        { label: "Research Score", value: "8.5", suffix: "/10" }
      ],
      image: "https://cdn.pixabay.com/photo/2019/11/03/12/13/healthcare-4598738_1280.jpg"
    },
    {
      company: "Team Case Study",
      industry: "Financial Analysis",
      challenge: "Previous experience: Complex financial data processing system",
      solution: "Our team's expertise in building automated analysis pipelines",
      impact: "Showcasing our capabilities through past achievements",
      metrics: [
        { label: "Team Experience", value: "25", suffix: "+ years" },
        { label: "Projects Led", value: "50", suffix: "+" },
        { label: "Success Rate", value: "95", suffix: "%" }
      ],
      image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-dark-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
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
              Our Expertise & Early Success
            </span>
          </h2>
          <p className="text-xl text-dark-50/90 max-w-2xl mx-auto">
            While we're a new company, our team brings decades of combined experience. Here's a glimpse of our initial projects and capabilities.
          </p>
        </motion.div>

        {/* Success Stories Carousel */}
        <div className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-dark-300/80 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 cursor-pointer group ${
                  activeStory === index
                    ? 'border-primary/50 shadow-lg shadow-primary/20 scale-105'
                    : 'border-primary/20 hover:border-primary/30'
                }`}
                onClick={() => handleStoryClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-dark-400/60 group-hover:opacity-50 transition-opacity z-[5]"></div>
                  <img
                    src={imageErrors[index] ? getBackupImage(index) : story.image}
                    alt={story.company}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white mb-1">{story.company}</h3>
                    <p className="text-dark-50/90 text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium mb-2">Challenge:</h4>
                    <p className="text-dark-50/90">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-accent-blue font-medium mb-2">Solution:</h4>
                    <p className="text-dark-50/90">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-accent-neon font-medium mb-2">Impact:</h4>
                    <p className="text-dark-50/90">{story.impact}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-dark-400/50 rounded-lg p-3 text-center group-hover:bg-dark-400/70 transition-colors"
                    >
                      <div className="text-xl font-bold text-primary mb-1">
                        {metric.prefix}
                        {metric.value}
                        {metric.suffix}
                      </div>
                      <div className="text-xs text-dark-50/70">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStoryClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStory === index
                    ? 'bg-primary w-4'
                    : 'bg-dark-50/20 hover:bg-dark-50/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Team Expertise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-300/50 rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-dark-50">
            Combined Team Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "25", suffix: "+" },
              { label: "Team Certifications", value: "12", suffix: "+" },
              { label: "Industries Known", value: "8", suffix: "+" },
              { label: "Technologies Mastered", value: "15", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary via-accent-blue to-accent-neon bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-dark-50/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-dark-50/90 mb-6">
            Ready to innovate with a fresh, dedicated team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-accent-blue to-accent-neon text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            Start a Conversation
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;