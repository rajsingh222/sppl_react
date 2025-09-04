import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogCard = ({ image, author, date, title, excerpt, link, containerClass = '' }) => (
  <div className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${containerClass}`}>
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="text-xs sm:text-sm text-gray-500 flex items-center justify-between mb-2">
        <span className="truncate">{author}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sppl-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-5">
        {excerpt}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sppl-blue font-medium hover:text-sppl-dark-blue transition-colors"
      >
        Read more
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const posts = [
    {
      image: '/blogs/postblog1.jfif',
      author: 'Alex Johnson',
      date: 'Sep 1, 2025',
      title: 'Designing Reliable SHM at Scale',
      excerpt: 'A minimal look at the principles that make structural health monitoring systems robust, scalable, and future-ready.',
      link: 'https://www.linkedin.com/'
    },
    {
      image: '/blogs/postblog2.jfif',
      author: 'Priya Mehta',
      date: 'Aug 18, 2025',
      title: 'Data to Decisions: The SHM Pipeline',
      excerpt: 'From sensors to dashboards, how clean data, smart models, and thoughtful UX create meaningful outcomes.',
      link: 'https://www.linkedin.com/'
    },
    {
      image: '/blogs/postblog3.jfif',
      author: 'Rahul Verma',
      date: 'Aug 2, 2025',
      title: 'Edge + Cloud: A Balanced Approach',
      excerpt: 'Why hybrid architectures matter for latency, reliability, and sustainability in modern monitoring.',
      link: 'https://www.linkedin.com/'
    },
    {
      image: '/blogs/postblog4.PNG',
      author: 'Sana Khan',
      date: 'Jul 22, 2025',
      title: 'Modern Sensor Networks',
      excerpt: 'Choosing the right protocols and power profiles for long-lived, high-fidelity sensing at scale.',
      link: 'https://www.linkedin.com/'
    },
    {
      image: '/blogs/courseSHM.png',
      author: 'Dev Patel',
      date: 'Jul 5, 2025',
      title: 'Courses and Learning Paths',
      excerpt: 'A curated roadmap for engineers entering structural health monitoring and IoT analytics.',
      link: 'https://www.linkedin.com/'
    },
    {
  image: '/blogs/postblog1.jfif',
      author: 'Neha Gupta',
      date: 'Jun 16, 2025',
      title: 'Visualizing SHM Data',
      excerpt: 'Minimal visualization patterns that improve comprehension without overwhelming the user.',
      link: 'https://www.linkedin.com/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
            <p className="text-blue-100 text-lg">Minimal insights and updates from our team — clean, clear, and classy.</p>
          </div>
        </div>

        {/* Posts: 6 cards, 3 up and 3 down */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              {posts.map((post, i) => {
                const isSecondRow = i >= 3; // 0-2 first row, 3-5 second row
                const containerClass = isSecondRow ? 'lg:translate-y-4' : 'lg:-translate-y-4';
                return (
                  <BlogCard key={i} {...post} containerClass={containerClass} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
