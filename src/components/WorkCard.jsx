import { ExternalLink, Hourglass } from 'lucide-react';
import { STATUS } from '../data/work';

const statusConfig = {
  [STATUS.LIVE]: { pill: 'bg-emerald-500/[0.1] text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-400' },
  [STATUS.DEMO]: { pill: 'bg-blue-500/[0.1] text-blue-400 border-blue-500/20', dot: 'bg-cyan-400' },
  [STATUS.IN_DEVELOPMENT]: { pill: 'bg-amber-500/[0.1] text-amber-400 border-amber-500/20', dot: 'bg-amber-400' },
  [STATUS.PROTOTYPE]: { pill: 'bg-violet-500/[0.1] text-violet-400 border-violet-500/20', dot: 'bg-violet-400' },
};

function ctaFor(project) {
  switch (project.status) {
    case STATUS.LIVE:
      return project.liveUrl ? { label: 'View Live', href: project.liveUrl } : null;
    case STATUS.DEMO:
      return project.liveUrl ? { label: 'View Demo', href: project.liveUrl } : null;
    case STATUS.PROTOTYPE:
      // Only show a CTA if there's something real to view.
      return project.liveUrl ? { label: 'View Project', href: project.liveUrl } : null;
    case STATUS.IN_DEVELOPMENT:
    default:
      return null;
  }
}

export default function WorkCard({ project }) {
  const status = statusConfig[project.status] || statusConfig[STATUS.LIVE];
  const cta = ctaFor(project);

  return (
    <div className="card p-5 flex flex-col gap-4 group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border transition-colors duration-300"
            style={{
              background: 'linear-gradient(145deg, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.1) 100%)',
              borderColor: 'rgba(37,99,235,0.14)',
            }}
          >
            {project.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-white text-[14px] leading-snug truncate">{project.name}</h3>
            <span className="text-white/35 text-xs">{project.category}</span>
          </div>
        </div>
        <span className={`flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${status.pill}`}>
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status.dot}`}></span>
          {project.status}
        </span>
      </div>
      <p className="text-white/45 text-[13px] leading-relaxed flex-1">{project.description}</p>
      {project.disclaimer && (
        <p className="text-[11px] text-amber-400/70 leading-relaxed border-l-2 border-amber-500/20 pl-2.5">
          {project.disclaimer}
        </p>
      )}
      {project.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] text-blue-500/45 px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {cta ? (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-2.5 text-[13px]">
          <ExternalLink className="w-3.5 h-3.5" />
          {cta.label}
        </a>
      ) : (
        <div
          className="w-full py-2.5 rounded-lg text-[13px] font-medium flex items-center justify-center gap-2 text-white/30"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Hourglass className="w-3.5 h-3.5" />
          {project.status}
        </div>
      )}
    </div>
  );
}
