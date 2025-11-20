import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Floating 3D Card */}
          <motion.div
            className="relative inline-block"
            initial={{ rotateY: -30, rotateX: 15 }}
            animate={{ rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                variants={item}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
              >
                <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Hi, I'm
                </span>
              </motion.div>
              
              <motion.h1
                variants={item}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black mb-8"
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Chaitanya Sharma
                </motion.span>
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* Animated subtitle with typewriter effect */}
          <motion.div variants={item} className="space-y-4">
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                Full Stack Developer & Data Science Engineer
              </motion.span>
            </motion.p>
            
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Crafting beautiful digital experiences with code, creativity, and a passion for innovation
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-colors"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-16"
          >
            {['React', 'Node.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
              <motion.div
                key={tech}
                className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)',
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                }}
              >
                <motion.p
                  className="text-sm sm:text-base font-medium"
                  animate={{
                    color: ['#e9d5ff', '#f0abfc', '#e9d5ff'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {tech}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-purple-400"
          >
            <span className="text-sm">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3D Rotating shapes in background */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 border-4 border-purple-500/30 rounded-lg pointer-events-none"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-pink-500/30 rounded-full pointer-events-none"
        animate={{
          rotateX: [0, -360],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />
    </section>
  );
};

export default Hero;
