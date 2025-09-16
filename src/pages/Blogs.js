import React from 'react';
import Footer from '../components/Footer';

const BlogCard = ({ image, author, date, title, excerpt, link, containerClass = '' }) => (
  <div className={`group bg-white/90 rounded-xl shadow-[0_2px_16px_-4px_rgba(36,54,80,0.10)] overflow-hidden transition-all duration-300 hover:shadow-[0_6px_32px_-6px_rgba(36,54,80,0.16)] hover:-translate-y-1.5 flex flex-col h-full ${containerClass}`} style={{ fontFamily: 'Poppins, Segoe UI, sans-serif' }}>
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-105"
        style={{ borderRadius: '0.75rem 0.75rem 0 0', minHeight: '180px', maxHeight: '220px' }}
      />
    </div>
    <div className="p-5 md:p-6 flex flex-col flex-1">
      <div className="text-xs sm:text-sm text-gray-400 flex items-center justify-between mb-2 tracking-wide">
        <span className="truncate font-medium">{author}</span>
        <span className="font-light">{date}</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-sppl-blue transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-gray-600/90 leading-relaxed mb-4 text-[15px] flex-1 text-justify">
        {excerpt}
      </p>
      <div className="pt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sppl-blue/90 to-sppl-dark-blue/90 text-white text-sm font-medium shadow-sm hover:scale-105 hover:shadow-md transition-all"
          style={{ boxShadow: '0 1px 8px -2px rgba(36,54,80,0.10)' }}
        >
          Read more
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const posts = [
    {
      image: '/blog/1.jpg',
      author: 'Col Rohit Gogna',
      date: '14 June, 2025',
      title: "Strengthening India's Infrastructure, One Innovation at a Time",
      excerpt: 'We’re proud to share that Col Rohit Gogna, CEO Sanrachna Prahari Pvt Ltd (SPPL), recently delivered a central lecture at the College of Military Engineering (CME), Pune – attended by the Commandant, senior officers of Armed Forces, faculty, staff and all engineering students of this prestigious institution.',
      link: 'https://www.linkedin.com/posts/sanrachna-prahari-pvt-ltd_shm-defenceinfrastructure-sppl-activity-7334134688313212928-0Jhn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF26Ya0BNUi3tH74zO0nOKO5UwQP1RpVzUQ'
    },
    {
      image: '/blog/2.png',
      author: 'Col Rohit Gogna',
      date: '07 Aug, 2025',
      title: 'Certificate Course on SHM',
      excerpt: 'Sanrachna Prahari Pvt Ltd (SPPL) is pleased to announce a one day hands on certificate course on "Introduction to Structural Health Monitoring: Theory & Practice", in collaboration with IIT Delhi.',
      link: 'https://www.linkedin.com/posts/sanrachna-prahari-pvt-ltd_introduction-to-shm-theory-practice-activity-7316762848578129921-t5Um?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_WOk0Br5WpIX34lfJDhCpUJpJ9wQV_API'
    },
    {
      image: '/blog/3.jfif',
      author: 'Col Rohit Gogna',
      date: '23 Sep, 2024',
      title: 'What is SHM?',
      excerpt: 'Bridge collapse is not new to the world and the story is no different in India. Available data indicates to poor maintenance, design flaws, overloading, aging infrastructure and environmental changes, as prime factors responsible for such failures.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7243920334179987457/'
    },
    {
      image: '/blog/4.jfif',
      author: 'Ms. Shipra Prakash',
      date: '23 Oct, 2024',
      title: 'Building Collapse!',
      excerpt: 'Bengaluru, India’s rapidly growing metropolitan city, has witnessed multiple incidents of building collapses in recent years. These incidents raise significant concerns about construction standards, regulatory oversights and urban planning practices in high-density areas.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7254790422571409409/?actorCompanyId=104458075'
    },
    {
      image: '/blog/5.jfif',
      author: 'Col Rohit Gogna',
      date: '24 Oct, 2024',
      title: 'The Power of Academia-Industry Collaboration',
      excerpt: 'Academia and industry, both bring unique strengths to the table. While academic institutions excel in theoretical knowledge, research and exploration of new ideas, industry focuses on practical applications, commercialisation and scaling innovations.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7255203643715395584/?actorCompanyId=104458075'
    },
    {
  image: '/blog/6.png',
      author: 'Col Rohit Gogna',
      date: '27 Dec, 2024',
      title: 'Event Participations',
      excerpt: 'SPPL proudly participated in the IIT Delhi Alumni Day Presentation on 22 December 2024. The event served as a vibrant platform to showcase its patented SHM technologies and IoT-enabled sensor solutions, designed to revolutionise infrastructure safety.',
      link: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7278361484785545216/?actorCompanyId=104458075'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      {/* Hero */}
      <div className="text-center py-14 md:py-16 bg-gradient-to-r from-sppl-blue/95 to-sppl-dark-blue/95 text-white shadow-[0_2px_16px_-4px_rgba(36,54,80,0.10)]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight" style={{ fontFamily: 'Poppins, Segoe UI, sans-serif' }}>Blogs</h1>
          <p className="text-blue-100 text-lg md:text-xl font-light">Minimal insights and updates from our team — clean, clear and classy.</p>
        </div>
      </div>

      {/* Posts: 6 cards, 3 up and 3 down */}
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {posts.map((post, i) => {
              const isSecondRow = i >= 3;
              const containerClass = isSecondRow ? 'lg:translate-y-3' : 'lg:-translate-y-3';
              return (
                <BlogCard key={i} {...post} containerClass={containerClass} />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
