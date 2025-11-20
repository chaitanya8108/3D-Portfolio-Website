import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const projects = [
    {
      title: 'Personal 3D-Portfolio Website',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      tech: ['React.js', 'Node.js', 'Framer Motion', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      title: 'Expense Management System',
      description: 'Smart task management app with productivity insights.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Authentication'],
      gradient: 'from-cyan-500 to-blue-500',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with real-time metrics.',
      tech: ['Vue.js', 'Firebase', 'Chart.js', 'Tailwind'],
      gradient: 'from-green-500 to-emerald-500',
      link: '#',
    },
    
  ];

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of my recent work showcasing various technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 overflow-hidden"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  style={{ filter: 'blur(20px)', transform: 'translateZ(-10px)' }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Project number */}
                  <motion.div
                    className="text-6xl font-black text-purple-500/20"
                    animate={hoveredIndex === index ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-white"
                    animate={hoveredIndex === index ? {
                      x: [0, 5, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white border border-purple-500/30`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 pt-4 text-purple-400 hover:text-purple-300 transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        x: hoveredIndex === index ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                </div>

                {/* 3D Corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.5, 1],
                    rotate: [0, 90, 0],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating 3D elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-24 h-24 border-2 border-purple-500/20 rounded-lg pointer-events-none hidden lg:block"
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, 180],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />
    </section>
  );
};

export default Projects;
