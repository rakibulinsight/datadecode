import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  skills: string[];
  education: string;
  github: string;
  linkedin: string;
  codeSnippet: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Carter',
    role: 'Technical Lead',
    image: 'https://cdn.pixabay.com/photo/2023/06/09/08/25/ai-generated-8051238_1280.jpg',
    skills: ['Python', 'TensorFlow', 'AWS', 'System Architecture', 'Team Leadership'],
    education: 'M.S. Computer Science, Stanford University',
    github: 'github.com/johncarter',
    linkedin: 'linkedin.com/in/johncarter',
    codeSnippet: `def optimize_model(self, data):
    return self.model.fit(
        data,
        epochs=100,
        validation_split=0.2
    )`
  },
  {
    id: 2,
    name: 'Ava Martinez',
    role: 'Junior Data Scientist',
    image: 'https://cdn.pixabay.com/photo/2023/05/06/06/48/ai-generated-7973667_1280.jpg',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization', 'Statistical Analysis'],
    education: 'B.S. Data Science, MIT',
    github: 'github.com/avamartinez',
    linkedin: 'linkedin.com/in/avamartinez',
    codeSnippet: `def feature_engineering(self, df):
    return df.pipe(self.normalize)
             .pipe(self.encode_categorical)`
  },
  {
    id: 3,
    name: 'Liam Johnson',
    role: 'Data Analyst',
    image: 'https://cdn.pixabay.com/photo/2024/04/27/10/14/ai-generated-8723499_1280.jpg',
    skills: ['SQL', 'R', 'Tableau', 'Power BI', 'Statistical Modeling'],
    education: 'M.S. Analytics, Georgia Tech',
    github: 'github.com/liamj',
    linkedin: 'linkedin.com/in/liamjohnson',
    codeSnippet: `SELECT
    customer_segment,
    AVG(lifetime_value)
FROM analytics
GROUP BY 1
HAVING COUNT(*) > 100`
  },
  {
    id: 4,
    name: 'Sophia Lee',
    role: 'Full-Stack Developer',
    image: 'https://cdn.pixabay.com/photo/2024/04/27/10/14/ai-generated-8723499_1280.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL'],
    education: 'B.S. Computer Science, UC Berkeley',
    github: 'github.com/sophialee',
    linkedin: 'linkedin.com/in/sophialee',
    codeSnippet: `const analyzeData = async (data: DataSet) => {
    const results = await ml.process(data);
    return results.optimize();
};`
  },
  {
    id: 5,
    name: 'Ethan Ramirez',
    role: 'UI/UX Designer',
    image: 'https://cdn.pixabay.com/photo/2024/04/27/10/14/ai-generated-8723499_1280.jpg',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    education: 'BFA Design, Rhode Island School of Design',
    github: 'github.com/ethanr',
    linkedin: 'linkedin.com/in/ethanramirez',
    codeSnippet: `const theme = {
    colors: {
        primary: '#60A5FA',
        secondary: '#3B82F6'
    }
};`
  },
  {
    id: 6,
    name: 'Isabella Thompson',
    role: 'Business Development Executive',
    image: 'https://cdn.pixabay.com/photo/2024/04/27/10/14/ai-generated-8723499_1280.jpg',
    skills: ['Strategy', 'Client Relations', 'Market Analysis', 'Project Planning', 'Team Management'],
    education: 'MBA, Harvard Business School',
    github: 'github.com/isabellat',
    linkedin: 'linkedin.com/in/isabellathompson',
    codeSnippet: `class BusinessStrategy:
    def calculate_roi(self,
        investment, revenue):
        return (revenue - investment) / investment`
  },
  {
    id: 7,
    name: 'Michael Nguyen',
    role: 'Project Manager',
    image: 'https://cdn.pixabay.com/photo/2024/05/06/16/59/ai-generated-8743794_1280.png',
    skills: ['Agile', 'Scrum', 'Risk Management', 'Stakeholder Communication', 'Resource Planning'],
    education: 'PMP, M.S. Project Management, Northwestern University',
    github: 'github.com/michaeln',
    linkedin: 'linkedin.com/in/michaelnguyen',
    codeSnippet: `project.tasks.map(task => ({
    ...task,
    timeline: calculateTimeline(task),
    resources: allocateResources(task)
}));`
  }
];

// Define sections
const sections = [
  {
    id: 'leadership',
    title: 'Leadership Team',
    members: [1] // John Carter
  },
  {
    id: 'data-science',
    title: 'Data Science',
    members: [2, 3] // Ava Martinez, Liam Johnson
  },
  {
    id: 'development',
    title: 'Development',
    members: [4] // Sophia Lee
  },
  {
    id: 'design-business',
    title: 'Design & Business',
    members: [5, 6, 7] // Ethan Ramirez, Isabella Thompson, Michael Nguyen
  }
];

const Team: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayDelay = 5000; // 5 seconds per section

  const getCurrentSectionMembers = useCallback(() => {
    const sectionMembers = sections[currentSection].members;
    return teamMembers.filter(member => sectionMembers.includes(member.id));
  }, [currentSection]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-24 bg-dark-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Meet Our Team</span>
          </h2>
          <p className="text-dark-50/70 text-lg max-w-2xl mx-auto">
            Experts in data science, machine learning, and AI solutions
          </p>
        </motion.div>

        {/* Section Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setCurrentSection(index);
                  setIsAutoPlaying(false);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-primary text-dark-400 shadow-lg shadow-primary/20'
                    : 'bg-dark-300/50 text-dark-50/70 hover:bg-dark-300 hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Team Cards Container */}
        <div
          className="relative min-h-[600px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {getCurrentSectionMembers().map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: member.id * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group">
                    <div className="p-6 space-y-4 flex flex-col h-full">
                      {/* Terminal Header */}
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-2 font-mono text-sm text-dark-50/60 truncate">
                          {member.role.toLowerCase().replace(/ /g, '_')}.ts
                        </div>
                      </div>

                      {/* Profile Section */}
                      <div className="flex items-center space-x-4 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            className="filter grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </motion.div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary transition-colors duration-300 truncate">
                            {member.name}
                          </h3>
                          <p className="text-primary font-mono text-sm truncate">{member.role}</p>
                        </div>
                      </div>

                      {/* Code Snippet */}
                      <div className="flex-1 min-h-0 w-full">
                        <div className="bg-dark-500/50 rounded-md h-full">
                          <pre className="p-4 font-mono text-sm text-dark-50/70 whitespace-pre-wrap break-words overflow-y-auto max-h-[180px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
                            <code>{member.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2 flex-shrink-0">
                        <div className="font-mono text-sm text-primary"># Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-2 py-1 text-xs rounded-full bg-dark-500/50 text-dark-50/70 border border-primary/20 hover:border-primary/40 hover:text-primary transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="text-sm text-dark-50/70 truncate flex-shrink-0">
                        {member.education}
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center justify-center space-x-4 pt-2 flex-shrink-0">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={`https://${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-50/60 hover:text-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={`https://${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-50/60 hover:text-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-dark-300/50 mt-8">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: autoPlayDelay / 1000,
                ease: "linear",
                repeat: Infinity
              }}
              style={{
                display: isAutoPlaying ? "block" : "none"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;