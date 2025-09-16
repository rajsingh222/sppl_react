// import React from 'react';
// import Footer from '../components/Footer';

// const IconBridge = ({ className = 'w-10 h-10' }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//     <path d="M3 19V9m18 10V9M3 12h18" />
//     <path d="M6 12c3-4 9-4 12 0" />
//     <path d="M6 19v-4m12 4v-4" />
//   </svg>
// );

// const IconBuilding = ({ className = 'w-10 h-10' }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//     <rect x="5" y="3" width="10" height="18" rx="1" />
//     <path d="M15 7h4v14H5" />
//     <path d="M8 7h2M8 11h2M8 15h2" />
//   </svg>
// );

// const IconHeritage = ({ className = 'w-10 h-10' }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//     <path d="M12 4l8 4v2H4V8l8-4z" />
//     <path d="M6 20V10h12v10" />
//     <path d="M10 20v-6h4v6" />
//   </svg>
// );

// const CategoryCard = ({ title, subtitle, icon, items }) => (
//   <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
//     <div className="p-8 flex flex-col items-center text-center min-h-[220px]">
//       <div className="text-sppl-blue mb-4">{icon}</div>
//       <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
//       <p className="text-gray-500 text-sm">{subtitle}</p>
//     </div>

//     <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <div className="p-6 grid gap-4 content-center h-full">
//         {items.map((it) => (
//           <div key={it.title} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-sppl-blue/40 hover:bg-blue-50/30 transition-colors">
//             <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100">
//               <img src={it.image} alt={it.title} className="w-full h-full object-cover" loading="lazy" />
//             </div>
//             <div>
//               <div className="text-gray-900 font-semibold">{it.title}</div>
//               {it.subtitle && <div className="text-gray-500 text-sm">{it.subtitle}</div>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const categories = [
//     {
//       title: 'Bridge Health Monitoring',
//       subtitle: 'Structural integrity and safety insights',
//       icon: <IconBridge />,
//       items: [
//         { title: 'Rail Over Bridge at Chipyana', image: '/Projects/chipyana.png' },
//         { title: 'Garra River Bridge NH-30', image: '/Projects/gara2.jpg' }
//       ]
//     },
//     {
//       title: 'Building Health Monitoring',
//       subtitle: 'Smart buildings and critical facilities',
//       icon: <IconBuilding />,
//       items: [
//         { title: 'Cardiothoracic & Neuroscience Centre, AIIMS New Delhi', image: '/Projects/aims.jpg' }
//       ]
//     },
//     {
//       title: 'Heritage Health Monitoring',
//       subtitle: 'Preserving historical structures',
//       icon: <IconHeritage />,
//       items: [
//         { title: 'Agrasen Ki Baoli, New Delhi', image: '/Projects/baouli1.jpg' }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
//       <div>
//         <div className="text-center py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
//           <div className="max-w-4xl mx-auto px-6">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
//             <p className="text-xl text-blue-100 leading-relaxed">
//               Explore our key domains and sample deployments.
//             </p>
//           </div>
//         </div>

//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {categories.map((c) => (
//                 <CategoryCard key={c.title} {...c} />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Projects;

import React from 'react'
import ProjectsPage from './ProjectsPage'

const Projects = () => {
  return (
    <div><ProjectsPage/></div>
  )
}

export default Projects