import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // All projects with media (Movie Recommender is featured in the grid)
  const allProjects = [
    {
      id: 1,
      title: 'AI-Powered Movie Recommendation Engine',
      description: 'AI-powered movie recommendation system using K-Means clustering to group similar movies and provide relevant suggestions based on content similarity.',
      video: '/projects/movie-recommender/demo.mp4',
      images: [
        '/projects/movie-recommender/ss1.png',
        '/projects/movie-recommender/ss2.png',
      ],
      tech: ['Unsupervised Learning', 'Scikit-learn', 'Python', 'Django', 'Data Analysis'],
      github: 'https://github.com/haris14-dev/Movie-Recommendation-',
      demo: null,
    },
    { 
      id: 2,
      title: 'Hirely',
      description: 'AI-powered service marketplace that matches clients with skilled professionals using intelligent matching algorithms and predictive recommendations.',
      tech: ['Machine Learning', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/haris14-dev',
      demo: null,
    },
    {
      id: 3,
      title: 'Hand Gesture Detection',
      description: 'Real-time hand gesture recognition system using CNNs and OpenCV. Enables touchless interface control with 95% recognition accuracy in real-world conditions.',
      tech: ['CNN', 'OpenCV', 'PyTorch', 'Computer Vision'],
      github: 'https://github.com/haris14-dev',
      demo: null,
    },
    {
      id: 4,
      title: 'Customer Churn Predictor',
      description: 'Predictive analytics solution that identifies at-risk customers with 89% accuracy, enabling proactive retention strategies and reducing churn by 34%.',
      tech: ['XGBoost', 'Scikit-learn', 'Feature Engineering', 'Analytics'],
      github: 'https://github.com/haris14-dev',
      demo: null,
    },
    {
      id: 5,
      title: 'Tremor Detection System',
      description: 'Health-tech AI system for detecting and classifying tremor patterns from sensor data. Deployed in medical facilities for early diagnosis and monitoring.',
      video: '/projects/tremor-detection/demo.mp4',
      images: [
        '/projects/tremor-detection/ss1.png',
        '/projects/tremor-detection/ss2.png',
      ],
      tech: ['Signal Processing', 'Deep Learning', 'LSTM', 'Healthcare'],
      github: 'https://github.com/haris14-dev',
      demo: null,
    },
    {
      id: 6,
      title: 'Data Scraping Pipeline',
      description: 'Intelligent web scraping system that extracts, cleans, and processes large-scale data from multiple sources with error handling and data validation.',
      tech: ['BeautifulSoup', 'Scrapy', 'Python', 'Data Processing'],
      github: 'https://github.com/haris14-dev',
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="mb-6"
        >
          <p className="text-accent-blue font-semibold mb-2 text-sm">FEATURED</p>
          <h3 className="text-xl font-bold text-white">Latest Addition</h3>
        </motion.div>

        {/* Projects Grid - Compact Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {allProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
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
