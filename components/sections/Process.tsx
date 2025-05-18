import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    phase: 'Initial Phase',
    team: ['Data Analysts', 'Business Consultants'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: 'Deep dive into your data landscape and business objectives',
    activities: [
      'Business requirements gathering',
      'Data source identification',
      'Feasibility assessment',
      'Initial security audit'
    ],
    security: {
      measures: ['NDA Protection', 'Data Access Controls', 'Secure Communication Channels'],
      level: 'High',
      protocols: ['Data Classification', 'Access Logging']
    },
    duration: '2-3 weeks',
    deliverables: ['Requirements Document', 'Technical Assessment', 'Project Roadmap', 'Security Framework'],
    nextSteps: ['Strategy & Architecture']
  },
  {
    id: 2,
    title: 'Strategy & Architecture',
    phase: 'Planning Phase',
    team: ['Solution Architects', 'Security Engineers'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: 'Design robust architecture and data processing pipelines',
    activities: [
      'System architecture design',
      'Technology stack selection',
      'Security framework planning',
      'Scalability strategy'
    ],
    security: {
      measures: ['Architecture Security Review', 'Compliance Assessment', 'Risk Analysis'],
      level: 'Critical',
      protocols: ['Security-First Design', 'Encryption Planning']
    },
    duration: '3-4 weeks',
    deliverables: ['System Architecture', 'Security Protocol', 'Tech Stack Documentation'],
    nextSteps: ['Development & Testing']
  },
  {
    id: 3,
    title: 'Development & Testing',
    phase: 'Implementation Phase',
    team: ['Developers', 'QA Engineers', 'Security Testers'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Agile development with continuous testing and validation',
    activities: [
      'Sprint-based development',
      'Continuous integration',
      'Security testing',
      'Performance optimization'
    ],
    security: {
      measures: ['Code Security Analysis', 'Vulnerability Testing', 'Penetration Testing'],
      level: 'Critical',
      protocols: ['Secure Coding Standards', 'Automated Security Checks']
    },
    duration: '8-12 weeks',
    deliverables: ['Development Milestones', 'Test Reports', 'Security Audits'],
    nextSteps: ['Deployment & Integration']
  },
  {
    id: 4,
    title: 'Deployment & Integration',
    phase: 'Launch Phase',
    team: ['DevOps Engineers', 'System Administrators'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    description: 'Seamless deployment and integration with existing systems',
    activities: [
      'Environment setup',
      'Data migration',
      'System integration',
      'Security configuration'
    ],
    security: {
      measures: ['Deployment Security', 'Access Control Implementation', 'Monitoring Setup'],
      level: 'Critical',
      protocols: ['Zero-Downtime Deployment', 'Rollback Procedures']
    },
    duration: '2-3 weeks',
    deliverables: ['Deployment Documentation', 'Integration Tests', 'Monitoring Dashboard'],
    nextSteps: ['Maintenance & Optimization']
  },
  {
    id: 5,
    title: 'Maintenance & Optimization',
    phase: 'Ongoing Phase',
    team: ['Support Engineers', 'Performance Analysts'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    description: 'Continuous monitoring and performance optimization',
    activities: [
      'System monitoring',
      'Performance tuning',
      'Security updates',
      'Feature enhancements'
    ],
    security: {
      measures: ['Continuous Security Monitoring', 'Regular Security Updates', 'Incident Response'],
      level: 'High',
      protocols: ['Security Patch Management', 'Threat Monitoring']
    },
    duration: 'Ongoing',
    deliverables: ['Performance Reports', 'Security Updates', 'Enhancement Proposals'],
    nextSteps: ['Continuous Improvement']
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

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
            <span className="text-gradient">Our Process</span>
          </h2>
          <p className="text-dark-50/70 text-lg max-w-2xl mx-auto">
            A comprehensive workflow designed for security, efficiency, and success
          </p>
        </motion.div>

        {/* Flowchart */}
        <div className="relative">
          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: step.id % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.id * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div className={`flex ${step.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
                  {/* Connection Lines */}
                  {step.id < processSteps.length && (
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent"
                         style={{
                           left: step.id % 2 === 0 ? 'auto' : '50%',
                           right: step.id % 2 === 0 ? '50%' : 'auto',
                           top: '100%'
                         }}
                    />
                  )}

                  {/* Step Content */}
                  <motion.div
                    className={`flex-1 bg-dark-400/50 backdrop-blur-sm rounded-lg border ${
                      step.id === activeStep
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-primary/20'
                    } overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          step.id === activeStep ? 'bg-primary text-dark-400' : 'bg-dark-300/50 text-primary'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark-50">{step.title}</h3>
                          <p className="text-primary/70">{step.phase}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-dark-50">Team</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.team.map((member, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded-full bg-dark-500/50 text-dark-50/70">
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-dark-50">Duration</h4>
                          <p className="text-dark-50/70">{step.duration}</p>
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-dark-50">Key Activities</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-dark-50/70">
                              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Security Measures */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-dark-50">Security</h4>
                        <div className="bg-dark-500/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-dark-50/70">Security Level:</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              step.security.level === 'Critical' ? 'bg-red-500/20 text-red-400' :
                              'bg-primary/20 text-primary'
                            }`}>
                              {step.security.level}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {step.security.measures.map((measure, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-dark-50/70">
                                <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                {measure}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Deliverables & Next Steps */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-dark-50">Deliverables</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded-full bg-dark-500/50 text-dark-50/70">
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-dark-50">Next Steps</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.nextSteps.map((nextStep, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                                {nextStep}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phase Indicator */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    step.id === activeStep ? 'bg-primary text-dark-400' : 'bg-dark-300/50 text-primary'
                  }`}>
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;