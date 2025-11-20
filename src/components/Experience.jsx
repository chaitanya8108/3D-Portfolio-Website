import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing CI/CD pipelines.',
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      color: 'purple',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.',
      skills: ['JavaScript', 'TypeScript', 'PostgreSQL', 'Redis'],
      color: 'pink',
    },
    {
      year: '2020 - 2021',
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      description: 'Developed modern, accessible user interfaces with React and Vue.js. Optimized performance and improved user experience.',
      skills: ['React', 'Vue.js', 'Sass', 'Webpack'],
      color: 'cyan',
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      description: 'Contributed to various web projects, learning best practices and modern development workflows. Built features and fixed bugs.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
      color: 'green',
    },
  ];

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="experience" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My professional journey and the amazing teams I've worked with
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 overflow-hidden group"
                    whileHover={{
                      borderColor: `rgba(${exp.color === 'purple' ? '168, 85, 247' : exp.color === 'pink' ? '236, 72, 153' : exp.color === 'cyan' ? '34, 211, 238' : '34, 197, 94'}, 0.5)`,
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        exp.color === 'purple' ? 'from-purple-500/10 to-pink-500/10' :
                        exp.color === 'pink' ? 'from-pink-500/10 to-rose-500/10' :
                        exp.color === 'cyan' ? 'from-cyan-500/10 to-blue-500/10' :
                        'from-green-500/10 to-emerald-500/10'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Year badge */}
                      <motion.div
                        className="inline-block"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          exp.color === 'pink' ? 'from-pink-500 to-rose-500' :
                          exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-green-500 to-emerald-500'
                        } text-white shadow-lg`}>
                          {exp.year}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className={`text-lg font-semibold ${
                        exp.color === 'purple' ? 'text-purple-400' :
                        exp.color === 'pink' ? 'text-pink-400' :
                        exp.color === 'cyan' ? 'text-cyan-400' :
                        'text-green-400'
                      }`}>
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-gray-300 border border-slate-600"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* 3D corner accent */}
                    <motion.div
                      className={`absolute ${index % 2 === 0 ? 'bottom-0 left-0' : 'top-0 right-0'} w-32 h-32 bg-gradient-to-br ${
                        exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        exp.color === 'pink' ? 'from-pink-500 to-rose-500' :
                        exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                        'from-green-500 to-emerald-500'
                      } opacity-10 blur-3xl`}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Animated dot on timeline */}
                <motion.div
                  className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${
                      exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                      exp.color === 'pink' ? 'from-pink-500 to-rose-500' :
                      exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                      'from-green-500 to-emerald-500'
                    } shadow-lg`}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${
                        exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        exp.color === 'pink' ? 'from-pink-500 to-rose-500' :
                        exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                        'from-green-500 to-emerald-500'
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
