import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogModal from '../BlogModal';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string;
  category: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Leveraging AI for Business Intelligence",
    excerpt: "Discover how modern AI technologies are transforming business intelligence and decision-making processes.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    readTime: "5 min",
    image: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
    category: "AI Solutions",
    content: `
      <p>Artificial Intelligence has become an indispensable tool in modern business intelligence. By leveraging advanced algorithms and machine learning techniques, businesses can now process vast amounts of data to extract meaningful insights and make data-driven decisions.</p>
      <h3>Key Benefits of AI in Business</h3>
      <ul>
        <li>Enhanced data analysis capabilities</li>
        <li>Real-time decision making</li>
        <li>Predictive analytics</li>
        <li>Automated reporting</li>
      </ul>
      <p>By implementing AI-driven solutions, businesses can gain deeper insights into their operations and make more informed decisions. This leads to improved efficiency, reduced costs, and better customer satisfaction.</p>
    `
  },
  {
    id: 2,
    title: "Machine Learning in Healthcare",
    excerpt: "Exploring the revolutionary impact of machine learning applications in modern healthcare.",
    date: "March 12, 2024",
    author: "Dr. Michael Chen",
    readTime: "7 min",
    image: "https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg",
    category: "Machine Learning",
    content: `
      <p>The healthcare industry is experiencing a dramatic transformation through machine learning applications. From diagnosis to treatment planning, ML is revolutionizing how healthcare providers deliver care.</p>
      <h3>Applications in Healthcare</h3>
      <ul>
        <li>Disease prediction and diagnosis</li>
        <li>Treatment optimization</li>
        <li>Patient data analysis</li>
        <li>Healthcare resource management</li>
      </ul>
      <p>Machine learning algorithms are helping healthcare providers make more accurate diagnoses and provide better patient care. The technology enables early detection of diseases and personalized treatment plans.</p>
    `
  },
  {
    id: 3,
    title: "Cloud Integration Strategies",
    excerpt: "Best practices for seamless cloud integration in enterprise environments.",
    date: "March 10, 2024",
    author: "Alex Rivera",
    readTime: "6 min",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    category: "Cloud Integration",
    content: `
      <p>Effective cloud integration is crucial for modern businesses seeking to optimize their operations. A well-planned strategy ensures smooth transition and maximum benefits from cloud technologies.</p>
      <h3>Key Integration Considerations</h3>
      <ul>
        <li>Security and compliance</li>
        <li>Data migration strategies</li>
        <li>Performance optimization</li>
        <li>Cost management</li>
      </ul>
      <p>A well-planned cloud integration strategy can significantly improve business efficiency and scalability. It's essential to consider security, performance, and cost optimization throughout the process.</p>
    `
  }
];

const BlogSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleImageError = (blogId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [blogId]: true
    }));
  };

  // Use these backup images when the primary ones fail
  const getBackupImage = (category: string) => {
    switch (category) {
      case 'AI Solutions':
        return 'https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png';
      case 'Machine Learning':
        return 'https://cdn.pixabay.com/photo/2019/11/03/12/13/healthcare-4598738_1280.jpg';
      case 'Cloud Integration':
        return 'https://cdn.pixabay.com/photo/2017/01/22/12/07/cyber-security-2000045_1280.jpg';
      default:
        return 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg';
    }
  };

  const categories = ['all', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  const filteredBlogs = filter === 'all'
    ? blogs
    : blogs.filter(blog => blog.category === filter);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && filter === 'all') {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % blogs.length);
      }, 6000); // Change slide every 6 seconds (slightly offset from success stories)

      return () => clearInterval(timer);
    }
  }, [isPaused, filter]);

  // Reset active slide when filter changes
  useEffect(() => {
    setActiveSlide(0);
  }, [filter]);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsPaused(true);
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">
              Service Insights
            </span>
          </h2>
          <p className="text-xl text-dark-50/90 max-w-2xl mx-auto">
            Explore our latest insights, tutorials, and updates about our services and industry trends.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(category);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className={`px-6 py-2 rounded-full border ${
                filter === category
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-primary/20 text-dark-50/60 hover:border-primary/40'
              } transition-all duration-300`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              className={`bg-dark-300/50 rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer group ${
                activeSlide === index && filter === 'all'
                  ? 'border-primary/50 shadow-lg shadow-primary/20 scale-105'
                  : 'border-primary/10 hover:border-primary/30'
              }`}
              onClick={() => handleBlogClick(blog)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent z-10"></div>
                <img
                  src={imageErrors[blog.id] ? getBackupImage(blog.category) : blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(blog.id)}
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-dark-50/60 mb-4">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold text-dark-50 mb-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-dark-50/60 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{blog.author}</span>
                  <span className="text-sm text-dark-50/40">{blog.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Slide Indicators (only show when not filtered) */}
        {filter === 'all' && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-primary w-4'
                    : 'bg-dark-50/20 hover:bg-dark-50/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Blog Modal */}
      <BlogModal
        isOpen={!!selectedBlog}
        onClose={() => {
          setSelectedBlog(null);
          setIsPaused(false);
        }}
        blog={selectedBlog}
      />
    </section>
  );
};

export default BlogSection;