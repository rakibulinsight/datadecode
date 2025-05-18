import React from 'react';
import { motion } from 'framer-motion';

const OfficeMap = () => {
  return (
    <section className="py-24 bg-[#0B1221] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#3B0764]/5 to-[#0F172A]/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-[#1E293B]/40 rounded-full border border-[#3B82F6]/20 font-mono text-sm text-[#60A5FA] mb-6">
            <span className="text-[#34D399]">location</span>.headquarters
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]">
              Our Global Presence
            </span>
          </h2>
          <p className="text-[#E2E8F0]/80 max-w-2xl mx-auto">
            Strategically located in the heart of Comilla District, Bangladesh,
            where innovation meets tradition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-lg border border-[#3B82F6]/20 p-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117771.56754783195!2d91.10147730849776!3d23.460681412419047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sComilla%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1710425547572!5m2!1sen!2s"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-lg border border-[#3B82F6]/20 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-8">
                {/* Office Location */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#34D399]"></div>
                    <h3 className="text-xl font-semibold text-[#F8FAFC]">Visit Our Office</h3>
                  </div>
                  <div className="pl-5 font-mono space-y-2">
                    <p className="text-[#E2E8F0]/80">
                      <span className="text-[#3B82F6]">const</span>{' '}
                      <span className="text-[#60A5FA]">address</span> = {'{'}
                    </p>
                    <div className="pl-4 text-[#E2E8F0]/70">
                      <p>street: <span className="text-[#C084FC]">"Comilla District"</span>,</p>
                      <p>city: <span className="text-[#C084FC]">"Chittagong Division"</span>,</p>
                      <p>country: <span className="text-[#C084FC]">"Bangladesh"</span></p>
                    </div>
                    <p className="text-[#E2E8F0]/80">{'}'}</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#6366F1]"></div>
                    <h3 className="text-xl font-semibold text-[#F8FAFC]">Contact Details</h3>
                  </div>
                  <div className="pl-5 font-mono space-y-2">
                    <p className="text-[#E2E8F0]/80">
                      <span className="text-[#3B82F6]">const</span>{' '}
                      <span className="text-[#60A5FA]">contact</span> = {'{'}
                    </p>
                    <div className="pl-4 text-[#E2E8F0]/70">
                      <p>email: <span className="text-[#C084FC]">"contact@example.com"</span>,</p>
                      <p>phone: <span className="text-[#C084FC]">"+880 123 456 789"</span>,</p>
                      <p>hours: <span className="text-[#C084FC]">"Mon-Fri 9:00 AM - 6:00 PM"</span></p>
                    </div>
                    <p className="text-[#E2E8F0]/80">{'}'}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-[#3B82F6]/20">
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#E2E8F0]/60 hover:text-[#60A5FA] transition-colors">
                      <span className="font-mono text-xs">@linkedin</span>
                    </a>
                    <a href="#" className="text-[#E2E8F0]/60 hover:text-[#60A5FA] transition-colors">
                      <span className="font-mono text-xs">@twitter</span>
                    </a>
                    <a href="#" className="text-[#E2E8F0]/60 hover:text-[#60A5FA] transition-colors">
                      <span className="font-mono text-xs">@facebook</span>
                    </a>
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

export default OfficeMap;