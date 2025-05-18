import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useScrollTo } from '../../hooks/useScrollTo';

const menuItems = [
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Case Studies', href: 'case-studies' },
  { name: 'Team', href: 'team' },
  { name: 'Process', href: 'process' },
  { name: 'Reviews', href: 'reviews' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find the current active section
      const sections = menuItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100; // Offset for header

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(menuItems[index].href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollTo(sectionId);
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-300/90 backdrop-blur-sm border-b border-dark-100/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <span className="text-2xl font-bold text-gradient">DataDecode</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-primary'
                      : 'text-dark-50/70 hover:text-primary'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm px-5 py-2.5"
                onClick={() => scrollTo('contact')}
              >
                Schedule Consultation
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-dark-50 z-50 p-2 hover:bg-dark-400/50 rounded-lg transition-colors"
              onClick={handleMobileMenuClick}
              aria-label="Toggle menu"
            >
              <motion.div
                className="w-6 h-6 relative"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="absolute w-6 h-0.5 bg-current transform transition-transform"
                  style={{ top: "45%" }}
                  variants={{
                    open: { rotate: 45, y: 0 },
                    closed: { rotate: 0, y: -6 }
                  }}
                />
                <motion.span
                  className="absolute w-6 h-0.5 bg-current"
                  style={{ top: "45%" }}
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className="absolute w-6 h-0.5 bg-current transform transition-transform"
                  style={{ top: "45%" }}
                  variants={{
                    open: { rotate: -45, y: 0 },
                    closed: { rotate: 0, y: 6 }
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-300 shadow-xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <nav className="flex-1 space-y-2">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a
                        href={`#${item.href}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block py-3 transition-colors text-lg font-medium border-b border-dark-100/10 ${
                          activeSection === item.href
                            ? 'text-primary border-primary/30'
                            : 'text-dark-50/70 hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => {
                      scrollTo('contact');
                      closeMobileMenu();
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                  >
                    Schedule Consultation
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;