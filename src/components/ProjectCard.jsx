import React from 'react';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    // Logika warna status
    const isProgress = project.status === "In Progress";

    return (
        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col h-full relative overflow-hidden">

            {/* Badge Status di Pojok Kanan Atas */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                isProgress
                    ? "bg-amber-900/30 border-amber-700 text-amber-400"
                    : "bg-emerald-900/30 border-emerald-700 text-emerald-400"
            }`}>
                {isProgress ? <Clock size={12}/> : <CheckCircle2 size={12}/>}
                {project.status}
            </div>

            <div className="flex items-center justify-between mb-4 mt-2">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-900/20 transition">
                    {project.icon}
                </div>
            </div>

            {/* Kategori (Role PM) */}
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 block">
        {project.category}
      </span>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                {project.title}
            </h3>

            <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
              {t}
            </span>
                    ))}
                </div>

                <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                    Lihat Detail Management <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;