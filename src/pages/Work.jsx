import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { workProjects, workCategories } from '../data/work';
import WorkCard from '../components/WorkCard';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? workProjects
    : workProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: 'rgba(37,99,235,0.07)', borderColor: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}>
            <Briefcase className="w-3.5 h-3.5" />
            Our Work
          </div>
          <h1 className="text-[2.25rem] font-black text-white tracking-tight mb-2.5">
            Products, platforms, and tools we've built
          </h1>
          <p className="text-white/35 text-[14.5px] max-w-xl mx-auto leading-relaxed">
            Cabrera AI doesn't only collect AI tools — we design and build useful AI products, web
            applications, business platforms, and automation. Here's a look at the work, live and in progress.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {workCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`chip ${activeCategory === cat ? 'chip-active-blue' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-[13px] mb-6 text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span className="text-blue-400 font-semibold">{filtered.length}</span>{' '}
          project{filtered.length !== 1 ? 's' : ''}
        </p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(project => <WorkCard key={project.id} project={project} />)}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🗂️</div>
            <h3 className="text-white font-semibold text-lg mb-2">No projects in this category yet</h3>
            <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Try a different filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
