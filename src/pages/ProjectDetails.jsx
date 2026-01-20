import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    // Cari project berdasarkan ID yang ada di URL
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="text-white text-center pt-40">Project not found</div>;
    }

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition">
                    <ArrowLeft size={20} className="mr-2"/> Kembali ke Home
                </Link>


                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    {/* Header Image Simulation */}

                    <div className="h-64 md:h-80 bg-slate-800 w-full overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 to-transparent">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                            <span className="text-blue-400 font-mono">{project.category}</span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Kiri: Konten Utama */}
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                                <p className="text-slate-300 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <h2 className="text-2xl font-bold text-white mb-4">Technical Detail & Result</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    {project.fullContent}
                                </p>
                            </div>

                            {/* Kanan: Sidebar Info */}
                            <div className="md:col-span-1 space-y-6">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                    <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full">
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;