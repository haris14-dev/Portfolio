import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // Featured project with media assets
  const featuredProject = {
    title: 'AI-Powered Movie Recommendation Engine',
    description: 'Advanced collaborative filtering system that analyzes user preferences and movie metadata to deliver highly personalized recommendations with 92% accuracy.',
    video: '/projects/movie-recommender/demo.mp4',
    images: [
      '/projects/movie-recommender/ss1.png',
      '/projects/movie-recommender/ss2.png',
    ],
    tech: ['Collaborative Filtering', 'Scikit-learn', 'Python', 'React', 'Data Analysis'],
    github: 'https://github.com/haris14-dev',
    demo: null,
  };

  const projects = [
    {
      id: 1,
      title: 'Hirely',
      description: 'AI-powered service marketplace that matches clients with skilled professionals using intelligent matching algorithms and predictive recommendations.',
      tech: ['Machine Learning', 'PyTorch', 'React'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '🏢',
      color: 'from-accent-blue/20 to-accent-purple/20',
    },
    {
      id: 2,
      title: 'Movie Recommender System',
      description: 'Advanced recommendation engine using collaborative filtering and content-based techniques to provide personalized movie suggestions with 92% accuracy.',
      tech: ['Collaborative Filtering', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '🎬',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 3,
      title: 'Hand Gesture Detection',
      description: 'Real-time hand gesture recognition system using CNNs and OpenCV. Enables touchless interface control with 95% recognition accuracy in real-world conditions.',
      tech: ['CNN', 'OpenCV', 'PyTorch'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '👋',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 4,
      title: 'Customer Churn Predictor',
      description: 'Predictive analytics solution that identifies at-risk customers with 89% accuracy, enabling proactive retention strategies and reducing churn by 34%.',
      tech: ['XGBoost', 'Scikit-learn', 'Feature Engineering'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '📊',
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 5,
      title: 'Tremor Detection System',
      description: 'Health-tech AI system for detecting and classifying tremor patterns from sensor data. Deployed in medical facilities for early diagnosis and monitoring.',
      tech: ['Signal Processing', 'Deep Learning', 'LSTM'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '⚕️',
      color: 'from-red-500/20 to-pink-500/20',
    },
    {
      id: 6,
      title: 'Data Scraping Pipeline',
      description: 'Intelligent web scraping system that extracts, cleans, and processes large-scale data from multiple sources with error handling and data validation.',
      tech: ['BeautifulSoup', 'Scrapy', 'Python'],
      github: 'https://github.com/haris14-dev',
      demo: null,
      image: '🔍',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of AI and ML projects that have delivered real business impact and solved complex technical challenges.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-6" />
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-6">
            <p className="text-accent-blue font-semibold mb-1 text-sm">FEATURED PROJECT</p>
            <h3 className="text-2xl font-bold text-white">Latest Addition</h3>
          </div>
          <div className="max-w-3xl">
            <ProjectCard {...featuredProject} />
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />

        {/* Other Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-white">More Projects</h3>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

              <motion.div
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-dark-tertiary/60 group-hover:border-accent-blue/40 transition-all duration-300 h-full flex flex-col shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.image}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 rounded-full bg-dark-primary/60 border border-accent-blue/40 text-xs text-gray-300 hover:border-accent-blue/80 hover:bg-accent-blue/10 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to start your next project? Let's build something amazing together.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
